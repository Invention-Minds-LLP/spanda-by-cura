import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/** One ribbon of the logo's swoosh: it rises left to right, like the running figure's trail. */
interface Ribbon {
  head: string;
  tail: string;
  y: number;
  z: number;
  width: number;
  amp: number;
  phase: number;
  opacity: number;
}

export interface SwooshOptions {
  lowPower: boolean;
  animate: boolean;
  /** Overall rise across the frame, in world units. */
  rise: number;
  /** Vertical centre of the ribbons, as a fraction of visible height (-0.5 … 0.5). */
  centre: number;
  /** Overall opacity multiplier, so the ribbons sit quietly behind text. */
  strength?: number;
}

const SEG = 180;
const ACROSS = 5;

/** The logo's three colours: sage swoosh, bronze swoosh, and the figure's slate-to-sage stroke. */
const RIBBONS: Ribbon[] = [
  { head: '#8fa08a', tail: '#8fa08a', y: 0.9, z: -0.6, width: 1.5, amp: 0.45, phase: 0, opacity: 0.55 },
  { head: '#be8b58', tail: '#d7aa7c', y: -0.2, z: 0.2, width: 1.1, amp: 0.4, phase: 1.9, opacity: 0.6 },
  { head: '#9fb5c2', tail: '#8fa08a', y: -1.2, z: 0.6, width: 0.8, amp: 0.5, phase: 3.6, opacity: 0.35 },
];

export class SwooshScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  private meshes: THREE.Mesh<THREE.BufferGeometry, THREE.MeshPhysicalMaterial>[] = [];
  private disposables: { dispose(): void }[] = [];
  private width = 1;
  private height = 1;
  private halfW = 8;
  private halfH = 5;
  private drift = 0;
  private pointer = new THREE.Vector2();
  private eased = new THREE.Vector2();
  private raf = 0;
  private visible = true;
  private start = performance.now();

  constructor(
    canvas: HTMLCanvasElement,
    private opts: SwooshOptions,
  ) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, opts.lowPower ? 1.5 : 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = env;
    this.scene.environmentIntensity = 0.6;
    this.disposables.push(env, pmrem);

    const key = new THREE.DirectionalLight('#fff3e3', 1.6);
    key.position.set(-6, 7, 8);
    this.scene.add(key, new THREE.AmbientLight('#ffffff', 0.4));

    for (const r of RIBBONS) this.meshes.push(this.build(r));
    this.camera.position.set(0, 0, 18);
  }

  private build(r: Ribbon) {
    const count = (SEG + 1) * ACROSS;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    const colors = new Float32Array(count * 4);
    const head = new THREE.Color(r.head);
    const tail = new THREE.Color(r.tail);
    const c = new THREE.Color();
    for (let i = 0; i <= SEG; i++) {
      const u = i / SEG;
      c.copy(tail).lerp(head, THREE.MathUtils.smoothstep(u, 0.15, 0.8));
      const a = THREE.MathUtils.smoothstep(u, 0, 0.18) * THREE.MathUtils.smoothstep(1 - u, 0, 0.1);
      for (let j = 0; j < ACROSS; j++) colors.set([c.r, c.g, c.b, a], (i * ACROSS + j) * 4);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 4));
    const index: number[] = [];
    for (let i = 0; i < SEG; i++) {
      for (let j = 0; j < ACROSS - 1; j++) {
        const a = i * ACROSS + j;
        const b = a + ACROSS;
        index.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    geo.setIndex(index);
    const mat = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      transparent: true,
      opacity: r.opacity * (this.opts.strength ?? 1),
      side: THREE.DoubleSide,
      roughness: 0.38,
      clearcoat: 0.6,
      clearcoatRoughness: 0.3,
      sheen: 0.8,
      sheenColor: new THREE.Color('#ffffff'),
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    this.scene.add(mesh);
    this.disposables.push(geo, mat);
    return mesh;
  }

  resize(width: number, height: number): void {
    this.width = Math.max(1, width);
    this.height = Math.max(1, height);
    this.renderer.setSize(this.width, this.height, false);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.halfH = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.position.z;
    this.halfW = this.halfH * this.camera.aspect;
    this.render();
  }

  /** Scroll parallax: shift the ribbons by a fraction of the visible height. */
  setDrift(d: number): void {
    this.drift = d;
    if (!this.raf) this.render();
  }

  setPointer(x: number, y: number): void {
    this.pointer.set(x, y);
  }

  setVisible(v: boolean): void {
    this.visible = v;
    if (v) this.play();
    else this.pause();
  }

  play(): void {
    if (!this.opts.animate || this.raf || !this.visible) return;
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      this.render();
    };
    this.raf = requestAnimationFrame(loop);
  }

  pause(): void {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  private render(): void {
    const t = this.opts.animate ? (performance.now() - this.start) / 1000 : 4;
    this.eased.lerp(this.pointer, this.opts.animate ? 0.05 : 1);
    this.camera.position.x = this.eased.x * 0.8;
    this.camera.position.y = this.eased.y * 0.5;
    this.camera.lookAt(0, 0, 0);

    const span = this.halfW * 1.2;
    const cy = (this.opts.centre + this.drift) * this.halfH * 2;
    const p = new THREE.Vector3();
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const tan = new THREE.Vector3();
    const side = new THREE.Vector3();
    const fwd = new THREE.Vector3(0, 0, 1);

    RIBBONS.forEach((r, ri) => {
      const path = (u: number, out: THREE.Vector3) => {
        const x = -span + u * span * 2;
        // The logo's sweep: low on the left, curling up on the right.
        const sweep = this.opts.rise * Math.pow(u, 1.6);
        const y = r.y + sweep + r.amp * Math.sin(u * 4.6 + t * 0.35 + r.phase) + 0.15 * Math.sin(u * 11 + t * 0.7 + r.phase);
        const z = r.z + 0.6 * Math.sin(u * 2.8 + t * 0.3 + r.phase);
        return out.set(x, y + cy, z);
      };
      const pos = this.meshes[ri].geometry.attributes['position'] as THREE.BufferAttribute;
      for (let i = 0; i <= SEG; i++) {
        const u = i / SEG;
        path(u, p);
        path(Math.min(1, u + 0.003), a);
        path(Math.max(0, u - 0.003), b);
        tan.subVectors(a, b).normalize();
        const twist = 0.8 * Math.sin(u * 3.8 + t * 0.45 + r.phase * 1.3);
        side.crossVectors(tan, fwd).normalize().applyAxisAngle(tan, twist);
        // Thick in the middle, tapering to a point at both ends, like a brush stroke.
        const w = r.width * Math.pow(Math.sin(Math.PI * u), 0.7);
        for (let j = 0; j < ACROSS; j++) {
          const v = j / (ACROSS - 1) - 0.5;
          pos.setXYZ(i * ACROSS + j, p.x + side.x * w * v, p.y + side.y * w * v, p.z + side.z * w * v);
        }
      }
      pos.needsUpdate = true;
      this.meshes[ri].geometry.computeVertexNormals();
    });

    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.pause();
    this.disposables.forEach((d) => d.dispose());
    this.renderer.dispose();
  }
}
