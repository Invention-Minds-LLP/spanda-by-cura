import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Glyph } from '../home/glyph';
import { SITE, whatsappLink } from '../site.config';
import { CONDITION_GUIDES, SPECIALITIES_FULL, slugify } from './content/specialities';

/** Shared shell for every public page: announcement, header with mega menu, footer, floating actions. */
@Component({
  selector: 'sp-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Glyph],
  templateUrl: './layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLayout {
  protected readonly site = SITE;
  protected readonly specs = SPECIALITIES_FULL;
  protected readonly year = new Date().getFullYear();
  protected readonly whatsapp = whatsappLink('Hello SPANDA, I would like to enquire about a rehabilitation assessment.');
  protected readonly menuOpen = signal(false);
  protected readonly megaOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    const router = inject(Router);
    const destroy = inject(DestroyRef);
    if (isPlatformBrowser(inject(PLATFORM_ID))) inject(ViewportScroller).setOffset([0, 96]);
    const sub = router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.closeAll();
    });
    destroy.onDestroy(() => sub.unsubscribe());

    afterNextRender(() => {
      const onScroll = () => this.scrolled.set(scrollY > 40);
      onScroll();
      addEventListener('scroll', onScroll, { passive: true });
      const outside = (e: PointerEvent) => {
        if (!(e.target as Element).closest('.has-mega')) this.megaOpen.set(false);
      };
      addEventListener('pointerdown', outside);
      const esc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') this.closeAll();
      };
      addEventListener('keydown', esc);
      destroy.onDestroy(() => {
        removeEventListener('scroll', onScroll);
        removeEventListener('pointerdown', outside);
        removeEventListener('keydown', esc);
      });
    });
  }

  /** Skip link: move focus to the main content without changing the route. */
  protected skip(e: Event): void {
    e.preventDefault();
    const main = document.getElementById('main');
    main?.focus();
    main?.scrollIntoView();
  }

  protected closeAll(): void {
    this.menuOpen.set(false);
    this.megaOpen.set(false);
  }

  /** Link target for a condition: its own guide if one exists, otherwise its section on the speciality page. */
  protected conditionLink(specId: string, name: string): { link: string; fragment?: string } {
    const slug = slugify(name);
    return CONDITION_GUIDES[slug] ? { link: CONDITION_GUIDES[slug] } : { link: '/rehabilitation/' + specId, fragment: slug };
  }
}
