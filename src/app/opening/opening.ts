import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Glyph } from '../home/glyph';
import { SITE, whatsappLink } from '../site.config';
import type { SwooshScene } from '../shared/swoosh-scene';

/**
 * The launch page. One object drops in per word, the ground changes colour with each,
 * the four stack into one, and only then is the name revealed.
 */
@Component({
  selector: 'app-opening',
  imports: [Glyph],
  templateUrl: './opening.html',
  styleUrl: './opening.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Opening {
  protected readonly site = SITE;
  protected readonly notify = whatsappLink('Hello Spanda, please let me know when you open.');
  protected readonly words = ['Movement.', 'Balance.', 'Breath.'];
  protected readonly live = signal(false);
  /** -1 intro, 0–2 a word, 4 together, 5 the reveal. */
  protected readonly stage = signal(-1);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private scene?: SwooshScene;
  private cleanup: (() => void)[] = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.cleanup.forEach((fn) => fn());
      this.scene?.dispose();
    });
    afterNextRender(() => this.start());
  }

  private go(stage: number): void {
    this.stage.set(stage);
    this.scene?.setDrift(stage < 0 ? -0.1 : Math.min(stage, 4) * 0.05);
  }

  private async start(): Promise<void> {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = this.host.nativeElement as HTMLElement;

    const probe = document.createElement('canvas');
    if (probe.getContext('webgl2') || probe.getContext('webgl')) {
      const { SwooshScene } = await import('../shared/swoosh-scene');
      const lowPower =
        (navigator.hardwareConcurrency ?? 8) <= 4 ||
        ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4 ||
        innerWidth < 760;
      this.scene = new SwooshScene(this.canvas().nativeElement, {
        lowPower,
        animate: !reduced,
        rise: 3.4,
        centre: -0.18,
      });
      const fit = () => this.scene!.resize(innerWidth, innerHeight);
      fit();
      addEventListener('resize', fit);
      this.cleanup.push(() => removeEventListener('resize', fit));
      if (!reduced) {
        const move = (e: PointerEvent) =>
          this.scene?.setPointer((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1));
        addEventListener('pointermove', move, { passive: true });
        this.cleanup.push(() => removeEventListener('pointermove', move));
      }
      this.scene.play();
      this.live.set(true);
    }

    if (reduced) {
      this.go(5);
      return;
    }
    this.go(-1);

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);

    // Each beat claims the stage while it is in the middle of the screen.
    root.querySelectorAll<HTMLElement>('[data-stage]').forEach((beat) => {
      const n = Number(beat.dataset['stage']);
      ScrollTrigger.create({
        trigger: beat,
        start: 'top 55%',
        end: 'bottom 45%',
        onToggle: (self) => {
          if (self.isActive) this.go(n);
        },
      });
    });

    // Lines arrive with a little bounce and leave upward.
    root.querySelectorAll<HTMLElement>('.line').forEach((line) => {
      gsap
        .timeline({ scrollTrigger: { trigger: line, start: 'top bottom', end: 'bottom top', scrub: 0.5 } })
        .fromTo(line, { y: 80, scale: 0.92 }, { y: 0, scale: 1, duration: 0.4, ease: 'back.out(2)' })
        .to(line, { y: -60, duration: 0.3, ease: 'power2.in' }, 0.7);
    });

    gsap.from(root.querySelectorAll('.reveal [data-rise]'), {
      y: 40,
      duration: 1,
      ease: 'back.out(1.6)',
      stagger: 0.08,
      scrollTrigger: { trigger: root.querySelector('.reveal'), start: 'top 60%', once: true },
    });

    this.cleanup.push(() => ScrollTrigger.getAll().forEach((t) => t.kill()));
  }
}
