import { Routes } from '@angular/router';
import {AuthenticatedComponent} from "./container/authenticated/authenticated.component";

export const authenticatedRoutes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile/profile.component').then(
            (c) => c.ProfileComponent,
          ),
        title: 'Profil',
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  }
];
