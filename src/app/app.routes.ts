import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Spanda By Cura · Centre For Rehabilitation & Recovery' },
  {
    path: 'opening',
    loadComponent: () => import('./opening/opening').then((m) => m.Opening),
    title: 'Spanda By Cura · Opening soon',
  },
  {
    path: 'v2',
    loadComponent: () => import('./v2/v2').then((m) => m.V2),
    title: 'Spanda By Cura · Centre For Rehabilitation & Recovery',
  },
  {
    path: 'v3',
    loadComponent: () => import('./v3/v3').then((m) => m.V3),
    title: 'Spanda By Cura · Rehabilitation Centre in Whitefield, Bengaluru',
  },
  { path: '**', redirectTo: '' },
];
