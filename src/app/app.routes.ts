import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./Home/layout/layout-home/layout-home.component'),
    children: [
      {
        path: 'travels',
        title: 'Viajes',
        loadComponent: () =>
          import('./Home/pages/travels-page/travels-page.component'),
      },
      {path:'**',redirectTo:'travels'},
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
