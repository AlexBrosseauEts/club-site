import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(c => c.HomeComponent),
        title: 'Home'
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/about/about.component').then(c => c.AboutComponent),
        title: 'Projects'
      },
];
