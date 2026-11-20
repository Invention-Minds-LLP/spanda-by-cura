import * as THREE from 'three';

/**
 * A photograph rendered through WebGL so it can "breathe": a slow zoom, scroll parallax inside its frame,
 * a soft pulse wave that travels outward every few seconds (spanda = the first pulse of movement),
 * and a liquid ripple that follows the pointer.
 */
export interface PulseImageOptions {
  /** Where the pulse starts, in 0–1 image space (x right, y up). */
  origin?: [number, number];
  /** Seconds between pulses. 0 disables the pulse. */
  every?: number;
  /** Maximum parallax travel, as a fraction of the frame height. */
  travel?: number;
  /** Which part of the photo to keep when cropping, 0–1 (x right, y up). */
  focus?: [number, number];
}

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform sampler2D uTex;
  uniform vec2 uFrame;
  uniform vec2 uImage;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uPulse;
  uniform vec2 uOrigin;
  uniform float uScroll;
  uniform float uReveal;
  uniform vec2 uFocus;
  varying vec2 vUv;

  vec2 cover(vec2 uv) {
    float fr = uFrame.x / uFrame.y;
    float ir = uImage.x / uImage.y;
    vec2 s = fr > ir ? vec2(1.0, ir / fr) : vec2(fr / ir, 1.0);
    return (uv - 0.5) * s + 0.5 + (1.0 - s) * (uFocus - 0.5);
  }

  void main() {
    float aspect = uFrame.x / uFrame.y;
    // Breathing zoom plus room for the parallax travel.
    float zoom = 1.08 + 0.012 * sin(uTime * 0.55) + (1.0 - uReveal) * 0.18;
    vec2 uv = (vUv - 0.5) / zoom + 0.5;
    uv.y += uScroll;

    // Pointer ripple.
    vec2 dm = vUv - uMouse;
    dm.x *= aspect;
    float md = length(dm);
    float ripple = sin(md * 46.0 - uTime * 5.0) * exp(-md * 7.0) * uHover;

    // Pulse ring travelling outward from the origin.
    vec2 dp = vUv - uOrigin;
    dp.x *= aspect;
    float pd = length(dp);
    float radius = uPulse * 0.75;
    float fade = 1.0 - smoothstep(0.0, 1.0, uPulse);
    float ring = exp(-pow((pd - radius) * 16.0, 2.0)) * fade;

    vec2 dirM = md > 0.0001 ? dm / md : vec2(0.0);
    vec2 dirP = pd > 0.0001 ? dp / pd : vec2(0.0);
    dirM.x /= aspect;
    dirP.x /= aspect;
    uv += dirM * ripple * 0.006 + dirP * ring * 0.014;

    vec3 col = texture2D(uTex, cover(uv)).rgb;
    col += ring * 0.05;
    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;

export class PulseImage {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.Camera();
  private material: THREE.ShaderMaterial;
  private texture: THREE.Texture;
  private raf = 0;
  private visible = false;
  private start = performance.now();
  private lastPulse = -10;
  private hoverTarget = 0;
  private mouseTarget = new THREE.Vector2(0.5, 0.5);
  private revealTarget = 1;

  constructor(
    private canvas: HTMLCanvasElement,
    img: HTMLImageElement,
    lowPower: boolean,
    private opts: PulseImageOptions = {},
  ) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, lowPower ? 1.25 : 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.texture = new THREE.Texture(img);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = false;
    this.texture.needsUpdate = true;

    this.material = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTex: { value: this.texture },
        uFrame: { value: new THREE.Vector2(1, 1) },
        uImage: { value: new THREE.Vector2(img.naturalWidth, img.naturalHeight) },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uHover: { value: 0 },
        uPulse: { value: 2 },
        uOrigin: { value: new THREE.Vector2(...(opts.origin ?? [0.5, 0.5])) },
        uScroll: { value: 0 },
        uReveal: { value: 1 },
        uFocus: { value: new THREE.Vector2(...(opts.focus ?? [0.5, 0.5])) },
      },
    });
    this.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material));

    canvas.addEventListener('pointermove', this.onMove);
    canvas.addEventListener('pointerenter', this.onEnter);
    canvas.addEventListener('pointerleave', this.onLeave);
  }

  private onMove = (e: PointerEvent) => {
    const r = this.canvas.getBoundingClientRect();
    this.mouseTarget.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
  };
  private onEnter = () => (this.hoverTarget = 1);
  private onLeave = () => (this.hoverTarget = 0);

  resize(w: number, h: number): void {
    this.renderer.setSize(Math.max(1, w), Math.max(1, h), false);
    (this.material.uniforms['uFrame'].value as THREE.Vector2).set(Math.max(1, w), Math.max(1, h));
    this.render();
  }

  /** -1…1 as the frame passes through the viewport. */
  setScroll(p: number): void {
    this.material.uniforms['uScroll'].value = p * (this.opts.travel ?? 0.04);
  }

  /** 0 = zoomed in and waiting, 1 = settled. */
  setReveal(v: number): void {
    this.revealTarget = v;
  }

  /** Trigger a pulse now, optionally from a new origin. */
  pulse(origin?: [number, number]): void {
    if (origin) (this.material.uniforms['uOrigin'].value as THREE.Vector2).set(...origin);
    this.lastPulse = this.now();
  }

  setVisible(v: boolean): void {
    this.visible = v;
    if (v && !this.raf) {
      const loop = () => {
        this.raf = requestAnimationFrame(loop);
        this.render();
      };
      this.raf = requestAnimationFrame(loop);
    } else if (!v) {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    }
  }

  private now(): number {
    return (performance.now() - this.start) / 1000;
  }

  private render(): void {
    const u = this.material.uniforms;
    const t = this.now();
    const every = this.opts.every ?? 0;
    if (every > 0 && t - this.lastPulse > every) this.lastPulse = t;
    u['uTime'].value = t;
    u['uPulse'].value = (t - this.lastPulse) / 2.6;
    u['uHover'].value += (this.hoverTarget - u['uHover'].value) * 0.06;
    u['uReveal'].value += (this.revealTarget - u['uReveal'].value) * 0.05;
    (u['uMouse'].value as THREE.Vector2).lerp(this.mouseTarget, 0.12);
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.setVisible(false);
    this.canvas.removeEventListener('pointermove', this.onMove);
    this.canvas.removeEventListener('pointerenter', this.onEnter);
    this.canvas.removeEventListener('pointerleave', this.onLeave);
    this.texture.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }
}
