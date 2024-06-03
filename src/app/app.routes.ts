import { Routes } from '@angular/router';
import { authGuard } from "./routes/auth/guard/auth.guard";
import {authenticatedGuard} from "./routes/authenticated/guard/authenticated.guard";

export const routes: Routes = [
  {
    path: 'demo',
    loadComponent: () =>
      import('./routes/demo/demo/demo.component').then(
        (c) => c.DemoComponent,
      ),
    title: 'Démo',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth/auth.routes').then((r) => r.authRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'authenticated',
    loadChildren: () =>
      import('./routes/authenticated/authenticated.routes').then((r) => r.authenticatedRoutes),
    canActivate: [authenticatedGuard]
  },
  {
    path: '**',
    redirectTo: 'demo',
  },
];
