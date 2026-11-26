import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

/**
 * SPANDA's brand animation (a figure moving from a wheelchair, to a walker, to walking and running, which then
 * becomes the logo), shown beside projected content. The video is muted, downloads only when the band comes near
 * the screen, plays while it is visible and pauses when it is not. With reduced motion it does not autoplay:
 * the final logo frame is shown with controls instead.
 */
@Component({
  selector: 'sp-brand-story',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'brand-story', '[class.dark]': 'tone() === "dark"' },
  template: `
    <div class="wrap bs-grid">
      <figure class="bs-video">
        <video
          #video
          muted
          playsinline
          loop
          preload="none"
          poster="video/spanda-story-poster.jpg"
          width="800"
          height="720"
          [attr.controls]="reduced() ? '' : null"
          aria-describedby="bs-caption"
        >
          <source src="video/spanda-story.mp4" type="video/mp4" />
        </video>
        <figcaption id="bs-caption" class="visually-hidden">
          Animation: a figure in a wheelchair raises an arm, stands with a walker, walks, then runs, and becomes the
          SPANDA by Cura logo.
        </figcaption>
      </figure>
      <div class="bs-text"><ng-content /></div>
    </div>
  `,
})
export class BrandStory {
  readonly tone = input<'light' | 'dark'>('light');

  protected readonly reduced = signal(false);
  private readonly video = viewChild.required<ElementRef<HTMLVideoElement>>('video');

  constructor() {
    const browser = isPlatformBrowser(inject(PLATFORM_ID));
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      if (!browser) return;
      const v = this.video().nativeElement;
      // Autoplay policies need the property, not only the attribute.
      v.muted = true;
      v.defaultMuted = true;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.reduced.set(true);
        v.preload = 'metadata';
        return;
      }
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) v.play().catch(() => this.reduced.set(true));
          else v.pause();
        },
        { threshold: 0.35 },
      );
      io.observe(v);
      destroy.onDestroy(() => io.disconnect());
    });
  }
}
