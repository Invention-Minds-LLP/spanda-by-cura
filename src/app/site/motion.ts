import { DestroyRef, Injectable } from '@angular/core';

/**
 * Shared scroll motion for every page: content rises into place, framed photos drift (parallax),
 * the process line draws itself. Browser-only; respects prefers-reduced-motion.
 */
@Injectable({ providedIn: 'root' })
export class Motion {
  async attach(root: HTMLElement, destroy: DestroyRef): Promise<void> {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-rise]').forEach((el) => {
        gsap.from(el, { y: 36, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
      root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((frame) => {
        const img = frame.querySelector('img');
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -7 },
          { yPercent: 7, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } },
        );
      });
      root.querySelectorAll<HTMLElement>('[data-draw]').forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none', scrollTrigger: { trigger: line.parentElement, start: 'top 75%', end: 'bottom 55%', scrub: 0.6 } },
        );
      });
      root.querySelectorAll<HTMLElement>('[data-draw-y]').forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          { scaleY: 1, ease: 'none', scrollTrigger: { trigger: line.parentElement, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 } },
        );
      });
    }, root);
    requestAnimationFrame(() => ScrollTrigger.refresh());
    destroy.onDestroy(() => ctx.revert());
  }
}
