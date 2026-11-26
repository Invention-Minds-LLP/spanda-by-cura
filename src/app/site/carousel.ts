import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import type { Photo } from './content/specialities';

export interface CarouselItem {
  name: string;
  body: string;
  spec: string;
  link: string;
  photo: Photo;
}

/**
 * 3D cover-flow carousel for services/conditions. The centre card faces the viewer; neighbours turn away in
 * depth. Arrows, swipe/drag, keyboard and gentle autoplay. Reduced motion: no autoplay, flat transitions.
 * Every card is a real link, so content stays crawlable and keyboard-accessible.
 */
@Component({
  selector: 'sp-carousel',
  imports: [RouterLink, Glyph],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'carousel',
    role: 'region',
    'aria-roledescription': 'carousel',
    '[attr.aria-label]': 'label()',
    // Only a real mouse hovering, or keyboard focus, holds autoplay (touch would never "leave").
    '(pointerenter)': 'hover($event, true)',
    '(pointerleave)': 'hover($event, false)',
    '(focusin)': 'focusIn($event)',
    '(focusout)': 'paused.set(false)',
    '(keydown.arrowleft)': 'go(-1)',
    '(keydown.arrowright)': 'go(1)',
  },
  template: `
    <div
      class="cf-stage"
      (touchstart)="touchStart($event)"
      (touchend)="touchEnd($event)"
      (pointerdown)="down($event)"
      (pointerup)="up($event)"
      (pointercancel)="startX = null"
    >
      <ul class="cf-track">
        @for (c of items(); track c.name; let i = $index) {
          @let o = offset(i);
          <li
            class="cf-card glow-card"
            [class.is-active]="o === 0"
            [class.is-far]="abs(o) > 2"
            [style.transform]="transform()(o)"
            [style.zIndex]="20 - abs(o)"
            [attr.aria-hidden]="abs(o) > 2 ? 'true' : null"
            [attr.aria-roledescription]="'slide'"
            [attr.aria-label]="i + 1 + ' of ' + items().length"
          >
            <div class="cf-photo">
              <img [src]="c.photo.src" [alt]="c.photo.alt" [width]="c.photo.width" [height]="c.photo.height" loading="lazy" draggable="false" />
              <span class="cf-spec">{{ c.spec }}</span>
            </div>
            <div class="cf-body">
              <h3>
                <a class="stretched" [routerLink]="c.link" [attr.tabindex]="o === 0 ? null : -1">{{ c.name }}</a>
              </h3>
              <p>{{ c.body }}</p>
              <span class="cf-more">Read the guide <app-glyph name="right" /></span>
            </div>
            @if (o !== 0) {
              <button type="button" class="cf-hit" tabindex="-1" aria-hidden="true" (click)="index.set(i); nudge()"></button>
            }
          </li>
        }
      </ul>
    </div>
    <div class="cf-controls">
      <button type="button" class="cf-btn" (click)="go(-1, true)" aria-label="Previous"><app-glyph name="right" class="flip" /></button>
      <p class="cf-count" aria-live="polite">{{ index() + 1 }} / {{ items().length }}</p>
      <button type="button" class="cf-btn" (click)="go(1, true)" aria-label="Next"><app-glyph name="right" /></button>
    </div>
  `,
})
export class Carousel {
  readonly items = input.required<CarouselItem[]>();
  readonly label = input('Conditions we support');

  protected readonly index = signal(0);
  protected readonly paused = signal(false);
  protected startX: number | null = null;
  private touchX: number | null = null;
  private touchY = 0;
  /** After a touch or button press, autoplay rests briefly and then resumes by itself. */
  private restUntil = 0;
  private swiped = false;
  private readonly host = inject(ElementRef);
  private readonly narrow = signal(false);
  private readonly reduced = signal(false);

  protected readonly abs = Math.abs;

  constructor() {
    // Reset to the first card when the set changes (e.g. a filter tab).
    effect(() => {
      this.items();
      this.index.set(0);
    });

    const browser = isPlatformBrowser(inject(PLATFORM_ID));
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      if (!browser) return;
      const mq = matchMedia('(max-width: 700px)');
      const rm = matchMedia('(prefers-reduced-motion: reduce)');
      const sync = () => {
        this.narrow.set(mq.matches);
        this.reduced.set(rm.matches);
      };
      sync();
      mq.addEventListener('change', sync);
      const timer = setInterval(() => {
        if (!this.paused() && !this.reduced() && Date.now() > this.restUntil && document.visibilityState === 'visible') this.go(1);
      }, 4200);
      // A swipe must not also open the card underneath the finger.
      const host = this.host.nativeElement as HTMLElement;
      const guard = (e: Event) => {
        if (this.swiped) {
          e.preventDefault();
          e.stopImmediatePropagation();
          this.swiped = false;
        }
      };
      host.addEventListener('click', guard, true);
      destroy.onDestroy(() => host.removeEventListener('click', guard, true));
      destroy.onDestroy(() => {
        clearInterval(timer);
        mq.removeEventListener('change', sync);
      });
    });
  }

  /** Shortest signed distance from the active card, wrapping around. */
  protected offset(i: number): number {
    const n = this.items().length;
    let o = (i - this.index() + n) % n;
    if (o > n / 2) o -= n;
    return o;
  }

  protected transform = computed(() => {
    const narrow = this.narrow();
    const flat = this.reduced();
    return (o: number) => {
      const a = Math.abs(o);
      const x = o * (narrow ? 78 : 58);
      if (flat) return `translateX(${x}%) scale(${a === 0 ? 1 : 0.9})`;
      const z = -a * (narrow ? 120 : 170);
      const ry = Math.max(-50, Math.min(50, -o * 34));
      return `translateX(${x}%) translateZ(${z}px) rotateY(${ry}deg)`;
    };
  });

  protected go(step: number, byUser = false): void {
    const n = this.items().length;
    if (n) this.index.update((i) => (i + step + n) % n);
    if (byUser) this.nudge();
  }

  protected nudge(): void {
    this.restUntil = Date.now() + 6000;
  }

  protected hover(e: PointerEvent, inside: boolean): void {
    if (e.pointerType === 'mouse') this.paused.set(inside);
  }

  protected focusIn(e: FocusEvent): void {
    // Pause only for keyboard focus; a tap also focuses buttons but must not stop autoplay for good.
    if ((e.target as Element).matches?.(':focus-visible')) this.paused.set(true);
  }

  protected touchStart(e: TouchEvent): void {
    const t = e.touches[0];
    this.touchX = t.clientX;
    this.touchY = t.clientY;
    this.nudge();
  }

  protected touchEnd(e: TouchEvent): void {
    if (this.touchX === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - this.touchX;
    const dy = t.clientY - this.touchY;
    this.touchX = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      this.swiped = true;
      setTimeout(() => (this.swiped = false), 400);
      this.go(dx < 0 ? 1 : -1, true);
    }
  }

  /** Mouse and pen drag (touch is handled by the touch events above). */
  protected down(e: PointerEvent): void {
    if (e.pointerType !== 'touch') this.startX = e.clientX;
  }

  protected up(e: PointerEvent): void {
    if (this.startX === null || e.pointerType === 'touch') return;
    const dx = e.clientX - this.startX;
    this.startX = null;
    if (Math.abs(dx) > 40) {
      this.swiped = true;
      setTimeout(() => (this.swiped = false), 400);
      this.go(dx < 0 ? 1 : -1, true);
    }
  }
}
