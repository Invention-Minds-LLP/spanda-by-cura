import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../site.config';

export interface PageSeo {
  title: string;
  description: string;
  /** Path beginning with '/', e.g. '/about'. */
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object[];
  /** Keep this page out of search results (e.g. design options). */
  noindex?: boolean;
}

export interface Crumb {
  label: string;
  link: string;
}

/**
 * Sets title, description, canonical, Open Graph and JSON-LD for each page.
 * During prerendering the origin is unknown, so absolute URLs use the token __ORIGIN__,
 * which scripts/postbuild.mjs replaces with the deployed site URL.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));

  get origin(): string {
    return this.browser ? location.origin : '__ORIGIN__';
  }

  abs(path: string): string {
    return this.origin + (path.startsWith('/') ? path : '/' + path);
  }

  set(p: PageSeo): void {
    const url = this.abs(p.path === '/' ? '/' : p.path);
    const image = this.abs(p.image ?? 'img/m/hero-walking-therapist.jpg');
    this.title.setTitle(p.title);
    this.meta.updateTag({ name: 'description', content: p.description });
    this.meta.updateTag({ property: 'og:title', content: p.title });
    this.meta.updateTag({ property: 'og:description', content: p.description });
    this.meta.updateTag({ property: 'og:type', content: p.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.name });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    if (p.noindex) this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    else this.meta.removeTag('name="robots"');

    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;

    this.doc.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove());
    for (const data of [this.organisation(), ...(p.jsonLd ?? [])]) {
      const s = this.doc.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-seo', '');
      s.textContent = JSON.stringify(data);
      this.doc.head.appendChild(s);
    }
  }

  /** Only verified facts: name, descriptor and locality. No phone, ratings or reviews until confirmed. */
  private organisation(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: SITE.name,
      description: `${SITE.descriptor}. Orthopaedic, neurological and pulmonary rehabilitation.`,
      url: this.abs('/'),
      logo: this.abs('brand/spanda-logo.png'),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Whitefield, Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      ...(SITE.phoneHref ? { telephone: SITE.phoneHref } : {}),
      ...(SITE.email ? { email: SITE.email } : {}),
    };
  }

  breadcrumbs(items: Crumb[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: this.abs(c.link),
      })),
    };
  }

  faq(items: { q: string; a: string }[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
  }

  medicalPage(p: { name: string; description: string; path: string; about?: string; reviewed?: string }): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: p.name,
      description: p.description,
      url: this.abs(p.path),
      inLanguage: 'en-IN',
      ...(p.about ? { about: { '@type': 'MedicalTherapy', name: p.about } } : {}),
      ...(p.reviewed ? { lastReviewed: p.reviewed } : {}),
      audience: { '@type': 'PeopleAudience', geographicArea: { '@type': 'City', name: 'Bengaluru' } },
    };
  }
}
