import { RenderMode, ServerRoute } from '@angular/ssr';

const prerender = (path: string): ServerRoute => ({ path, renderMode: RenderMode.Prerender });

/** Every public route is prerendered to static HTML for search engines and fast first paint. */
export const serverRoutes: ServerRoute[] = [
  prerender(''),
  prerender('rehabilitation'),
  prerender('rehabilitation/orthopaedic/knee-replacement'),
  {
    path: 'rehabilitation/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ slug: 'orthopaedic' }, { slug: 'neurological' }, { slug: 'pulmonary' }],
  },
  prerender('about'),
  prerender('our-approach'),
  prerender('patient-information'),
  prerender('contact'),
  prerender('privacy'),
  prerender('v1'),
  prerender('v2'),
  prerender('opening'),
  // Unknown URLs: Netlify serves the client-side app, which shows the 404 page.
  { path: '**', renderMode: RenderMode.Client },
];
