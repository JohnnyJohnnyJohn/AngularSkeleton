import { Routes } from '@angular/router';
import { authGuard } from "./routes/auth/guard/auth.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth/auth.routes').then((r) => r.authRoutes),
    canActivate: [authGuard]
  },
  {
    path: '',
    loadComponent: () =>
      import('./routes/home/components/home/home.component').then(
        (c) => c.HomeComponent,
      ),
    title: 'Accueil',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
