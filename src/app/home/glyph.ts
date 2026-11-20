import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type GlyphName =
  | 'body'
  | 'speech'
  | 'mind'
  | 'holistic'
  | 'phone'
  | 'chat'
  | 'up'
  | 'right'
  | 'down'
  | 'plus'
  | 'pin'
  | 'mail'
  | 'menu'
  | 'close';

/** One stroke family for every icon on the site: 24 grid, 1.75 stroke, round joins. */
@Component({
  selector: 'app-glyph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', class: 'glyph' },
  styles: `
    :host { display: inline-block; width: 1.25em; height: 1.25em; flex: none; }
    svg { width: 100%; height: 100%; }
  `,
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      @switch (name()) {
        @case ('body') {
          <rect x="8.5" y="2.5" width="7" height="4" rx="1.2" />
          <rect x="8.5" y="10" width="7" height="4" rx="1.2" />
          <rect x="8.5" y="17.5" width="7" height="4" rx="1.2" />
          <path d="M12 6.5V10M12 14v3.5M15.5 12h2.5l2-2M8.5 12H6l-2 2" />
        }
        @case ('speech') {
          <path d="M4 4.5h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3.2v-3.2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
          <path d="M18.6 8a4.2 4.2 0 0 1 0 5M21 5.8a7.4 7.4 0 0 1 0 9.4" />
        }
        @case ('mind') {
          <path d="M14.5 21v-3h1.8a2 2 0 0 0 2-2v-2.4l1.6-.7a.6.6 0 0 0 .3-.9L18.3 9A7.2 7.2 0 1 0 7.8 16.9V21" />
          <path d="M11.5 14v-3M11.5 11c0-1.7 1-2.8 2.7-2.8 0 1.7-1 2.8-2.7 2.8zM11.5 12c0-1.3-.8-2.1-2.1-2.1 0 1.3.8 2.1 2.1 2.1z" />
        }
        @case ('holistic') {
          <path d="M12 19.5c-2.8-1.9-4.3-4.7-4.3-7.6 0-2 1.5-4.4 4.3-6.4 2.8 2 4.3 4.4 4.3 6.4 0 2.9-1.5 5.7-4.3 7.6z" />
          <path d="M12 19.5c-4 0-7.8-2-8.8-5.9 2.3-.5 4.2-.1 5.4.9M12 19.5c4 0 7.8-2 8.8-5.9-2.3-.5-4.2-.1-5.4.9" />
        }
        @case ('phone') {
          <path d="M5.2 3.5h3.3l1.6 4.1-2.1 1.4a11.5 11.5 0 0 0 7 7l1.4-2.1 4.1 1.6v3.3a2 2 0 0 1-2.1 2A16.6 16.6 0 0 1 3.2 5.6a2 2 0 0 1 2-2.1z" />
        }
        @case ('chat') {
          <path d="M20.2 11.6a8.2 8.2 0 0 1-12 7.2L3.8 20.2l1.4-4.2a8.2 8.2 0 1 1 15-4.4z" />
          <path d="M9 10.2c.4 1.9 2 3.6 4.4 4.3" />
        }
        @case ('up') {
          <path d="M12 19V5M6 11l6-6 6 6" />
        }
        @case ('down') {
          <path d="M12 5v14M6 13l6 6 6-6" />
        }
        @case ('right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('plus') {
          <path d="M12 5v14M5 12h14" />
        }
        @case ('pin') {
          <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
          <circle cx="12" cy="10" r="2.4" />
        }
        @case ('mail') {
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M3.5 7l8.5 6 8.5-6" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6L6 18" />
        }
      }
    </svg>
  `,
})
export class Glyph {
  readonly name = input.required<GlyphName>();
}
