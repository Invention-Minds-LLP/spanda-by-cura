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
import { Glyph } from './glyph';
import { FAQS, SPECIALITIES, STAGES, VISIT } from './home.content';
import { SITE, whatsappLink } from '../site.config';
import type { SwooshScene } from '../shared/swoosh-scene';

type Gsap = typeof import('gsap').gsap;

@Component({
  selector: 'app-home',
  imports: [Glyph],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly site = SITE;
  protected readonly specialities = SPECIALITIES;
  protected readonly stages = STAGES;
  protected readonly faqs = FAQS;
  protected readonly visit = VISIT;
  protected readonly year = new Date().getFullYear();
  protected readonly whatsapp = whatsappLink('Hello SPANDA, I would like to enquire about a rehabilitation assessment.');

  protected readonly menuOpen = signal(false);
  protected readonly openFaq = signal(0);
  protected readonly scrolled = signal(false);
  protected readonly live = signal(false);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly heroCanvas = viewChild.required<ElementRef<HTMLCanvasElement>>('heroCanvas');
  private readonly closeCanvas = viewChild.required<ElementRef<HTMLCanvasElement>>('closeCanvas');
  private scenes: SwooshScene[] = [];
  private cleanup: (() => void)[] = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.cleanup.forEach((fn) => fn());
      this.scenes.forEach((s) => s.dispose());
    });
    afterNextRender(() => this.start());
  }

  protected toggleFaq(i: number): void {
    this.openFaq.update((cur) => (cur === i ? -1 : i));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private async start(): Promise<void> {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onScroll = () => this.scrolled.set(scrollY > 12);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    this.cleanup.push(() => removeEventListener('scroll', onScroll));

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);
    this.cleanup.push(() => ScrollTrigger.getAll().forEach((t) => t.kill()));

    await this.startScenes(reduced);
    if (!reduced) this.choreograph(gsap);
    ScrollTrigger.refresh();
  }

  /** The logo's swooshes, as live 3D ribbons behind the two slate panels. */
  private async startScenes(reduced: boolean): Promise<void> {
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
    const { SwooshScene } = await import('../shared/swoosh-scene');
    const lowPower =
      (navigator.hardwareConcurrency ?? 8) <= 4 ||
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4 ||
      innerWidth < 760;

    // Ribbons sweep through the lower part of each slate panel, under the words, not through them.
    const defs: [HTMLCanvasElement, number, number, number][] = [
      [this.heroCanvas().nativeElement, 2.6, -0.43, 0.75],
      [this.closeCanvas().nativeElement, 1.4, -0.42, 0.55],
    ];
    for (const [canvas, rise, centre, strength] of defs) {
      const scene = new SwooshScene(canvas, { lowPower, animate: !reduced, rise, centre, strength });
      const host = canvas.parentElement!;
      const fit = () => scene.resize(host.clientWidth, host.clientHeight);
      fit();
      const ro = new ResizeObserver(fit);
      ro.observe(host);
      const io = new IntersectionObserver(([e]) => scene.setVisible(e.isIntersecting));
      io.observe(host);
      this.cleanup.push(() => ro.disconnect(), () => io.disconnect());
      scene.play();
      this.scenes.push(scene);
    }

    if (!reduced) {
      const move = (e: PointerEvent) => {
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = -((e.clientY / innerHeight) * 2 - 1);
        this.scenes.forEach((s) => s.setPointer(x, y));
      };
      addEventListener('pointermove', move, { passive: true });
      this.cleanup.push(() => removeEventListener('pointermove', move));
    }
    this.live.set(true);
  }

  private choreograph(gsap: Gsap): void {
    const root = this.host.nativeElement as HTMLElement;
    const hero = root.querySelector<HTMLElement>('.hero')!;

    // Hero: the photograph drifts and settles more slowly than the page; the ribbons rise with scroll.
    gsap.fromTo(
      root.querySelector('.hero-photo img'),
      { yPercent: 0, scale: 1.12 },
      { yPercent: 10, scale: 1.02, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } },
    );
    gsap.to(root.querySelector('.hero-copy'), {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to(
      {},
      {
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => this.scenes[0]?.setDrift(self.progress * 0.35),
        },
      },
    );

    // Every framed photograph moves inside its frame as it passes through the viewport.
    root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) return;
      const depth = Number(frame.dataset['parallax']) || 10;
      gsap.fromTo(
        img,
        { yPercent: -depth },
        { yPercent: depth, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    });

    // Contact band ribbons drift as it scrolls into view.
    gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: root.querySelector('.closing'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => this.scenes[1]?.setDrift((self.progress - 0.5) * 0.3),
        },
      },
    );

    // Bronze rules draw themselves in; content rises from just below its place.
    root.querySelectorAll<HTMLElement>('.rule').forEach((rule) => {
      gsap.fromTo(
        rule,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: rule, start: 'top 90%', once: true } },
      );
    });
    root.querySelectorAll<HTMLElement>('[data-rise]').forEach((el) => {
      gsap.from(el, {
        y: 36,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      });
    });

    // The process line fills from stage 1 to stage 5 as the section is read.
    const line = root.querySelector('.stages-progress');
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.querySelector('.process'), start: 'top 70%', end: 'bottom 70%', scrub: 0.6 },
        },
      );
    }
  }
}
