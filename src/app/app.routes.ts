import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Spanda By Cura · Centre For Rehabilitation & Recovery' },
  {
    path: 'opening',
    loadComponent: () => import('./opening/opening').then((m) => m.Opening),
    title: 'Spanda By Cura · Opening soon',
  },
  { path: '**', redirectTo: '' },
];
