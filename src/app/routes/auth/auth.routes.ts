import { Routes } from '@angular/router';
import {AuthComponent} from "./container/auth/auth.component";

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (c) => c.LoginComponent,
          ),
        title: 'Se connecter',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (c) => c.RegisterComponent,
          ),
        title: 'Inscription',
      },
      {
        path: '**',
        redirectTo: 'login',
      }
    ]
  },
];
