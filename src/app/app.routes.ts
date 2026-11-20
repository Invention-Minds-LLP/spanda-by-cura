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
  { path: '**', redirectTo: '' },
];
