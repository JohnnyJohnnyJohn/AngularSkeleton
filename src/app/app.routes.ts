import { Routes } from '@angular/router';
import { authGuard } from "./routes/auth/guard/auth.guard";
import {authenticatedRoutes} from "./routes/authenticated/authenticated.routes";
import {authenticatedGuard} from "./routes/authenticated/guard/authenticated.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth/auth.routes').then((r) => r.authRoutes),
    canActivate: [authGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./routes/authenticated/authenticated.routes').then((r) => r.authenticatedRoutes),
    canActivate: [authenticatedGuard]
  },
  {
    path: '**',
    redirectTo: '',
  },
];
