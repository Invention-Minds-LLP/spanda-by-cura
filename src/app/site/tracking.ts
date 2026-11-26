import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { SITE } from '../site.config';

type DataLayer = unknown[];
declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

const CONSENT_KEY = 'spanda-consent';

/**
 * Google Tag Manager with Consent Mode v2, mirroring the tracking stack used on the agency's other
 * healthcare sites (GA4, Google Ads conversions and call tracking, Meta pixel are configured inside GTM).
 *
 * Nothing loads while SITE.gtmId is empty. Consent defaults to "denied"; the visitor chooses in the banner.
 * Events never include names, phone numbers, conditions or condition page paths (DPDP Act 2023 and the
 * developer handoff: no sensitive health data to ads or analytics).
 */
@Injectable({ providedIn: 'root' })
export class Tracking {
  private readonly doc = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly enabled = !!SITE.gtmId;
  /** null = not yet chosen (show the banner). */
  readonly consent = signal<'granted' | 'denied' | null>(null);
  private started = false;

  start(): void {
    if (!this.browser || !this.enabled || this.started) return;
    this.started = true;
    const w = this.doc.defaultView!;
    w.dataLayer = w.dataLayer || [];
    const gtag = (...args: unknown[]) => w.dataLayer!.push(args);
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* storage blocked */
    }
    const granted = saved === 'granted';
    gtag('consent', 'default', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: 'denied', // healthcare: never personalise ads on health browsing
      analytics_storage: granted ? 'granted' : 'denied',
      wait_for_update: 500,
    });
    this.consent.set(saved === 'granted' || saved === 'denied' ? saved : null);

    w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = this.doc.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(SITE.gtmId)}`;
    this.doc.head.appendChild(s);

    // Click-to-call and WhatsApp clicks: the main enquiry routes, tracked as conversions.
    this.doc.addEventListener('click', (e) => {
      const a = (e.target as Element).closest('a');
      const href = a?.getAttribute('href') ?? '';
      if (href.startsWith('tel:')) this.event('click_to_call');
      else if (/wa\.me|whatsapp/.test(href)) this.event('whatsapp_click');
    });
  }

  choose(choice: 'granted' | 'denied'): void {
    this.consent.set(choice);
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      /* storage blocked */
    }
    const w = this.doc.defaultView;
    w?.dataLayer?.push([
      'consent',
      'update',
      { ad_storage: choice, ad_user_data: choice, analytics_storage: choice, ad_personalization: 'denied' },
    ]);
  }

  event(name: string, params: Record<string, string> = {}): void {
    if (!this.browser || !this.enabled) return;
    this.doc.defaultView?.dataLayer?.push({ event: name, ...params });
  }
}
