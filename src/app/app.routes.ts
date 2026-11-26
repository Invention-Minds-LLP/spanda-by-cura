import { Routes } from '@angular/router';
import { SiteLayout } from './site/layout';

/** Canonical public routes follow the developer handoff (section 01). */
export const routes: Routes = [
  {
    path: '',
    component: SiteLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/home').then((m) => m.HomePage) },
      { path: 'rehabilitation', loadComponent: () => import('./pages/specialities').then((m) => m.SpecialitiesPage) },
      {
        path: 'rehabilitation/:spec/:slug',
        loadComponent: () => import('./pages/guide').then((m) => m.GuidePage),
        canMatch: [
          (_: unknown, segments: { path: string }[]) =>
            ['orthopaedic', 'neurological', 'pulmonary'].includes(segments[1]?.path ?? ''),
        ],
      },
      {
        path: 'rehabilitation/:slug',
        loadComponent: () => import('./pages/speciality').then((m) => m.SpecialityPage),
        canMatch: [
          (_: unknown, segments: { path: string }[]) =>
            ['orthopaedic', 'neurological', 'pulmonary'].includes(segments[1]?.path ?? ''),
        ],
      },
      { path: 'about', loadComponent: () => import('./pages/info').then((m) => m.AboutPage) },
      { path: 'our-approach', loadComponent: () => import('./pages/info').then((m) => m.ApproachPage) },
      { path: 'patient-information', loadComponent: () => import('./pages/info').then((m) => m.PatientInfoPage) },
      { path: 'contact', loadComponent: () => import('./pages/info').then((m) => m.ContactPage) },
      { path: 'privacy', loadComponent: () => import('./pages/info').then((m) => m.PrivacyPage) },
      { path: 'v3', redirectTo: '', pathMatch: 'full' },
    ],
  },
  // Earlier design options, kept for comparison (noindex at build time).
  { path: 'v1', loadComponent: () => import('./home/home').then((m) => m.Home), title: 'Design option 1 · SPANDA' },
  { path: 'v2', loadComponent: () => import('./v2/v2').then((m) => m.V2), title: 'Design option 2 · SPANDA' },
  { path: 'opening', loadComponent: () => import('./opening/opening').then((m) => m.Opening), title: 'SPANDA by Cura · Opening soon' },
  {
    path: '**',
    component: SiteLayout,
    children: [{ path: '**', loadComponent: () => import('./pages/info').then((m) => m.NotFoundPage) }],
  },
];
