import {CanActivateFn, Router} from '@angular/router';
import {token$} from "../state/auth.store";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let token;

  token$.subscribe(tokenFromStore => {
    token = tokenFromStore;
  });

  return token === null ? true : router.navigate(['']);
};
