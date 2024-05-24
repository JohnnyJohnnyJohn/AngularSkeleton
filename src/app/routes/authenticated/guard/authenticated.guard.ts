import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {token$} from "../../auth/state/auth.store";

export const authenticatedGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let token;

  token$.subscribe(tokenFromStore => {
    token = tokenFromStore;
  });

  return token !== null ? true : router.navigate(['auth/login']);
};
