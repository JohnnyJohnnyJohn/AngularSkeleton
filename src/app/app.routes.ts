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
    path: '**',
    redirectTo: 'auth',
  },
];
