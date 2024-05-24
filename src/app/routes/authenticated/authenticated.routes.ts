import { Routes } from '@angular/router';
import {AuthenticatedComponent} from "./container/authenticated/authenticated.component";

export const authenticatedRoutes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (c) => c.HomeComponent,
          ),
        title: 'Home',
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  }
];
