import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { token$ } from "../../routes/auth/state/auth.store";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers;
    let token;

    token$.subscribe(tokenFromStore => {
      token = tokenFromStore;
    })

    headers = token ?
      req.headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`) :
      req.headers.set('Content-Type', 'application/json')

    return next.handle(
      req.clone({ headers: headers })
    );
  }
}
