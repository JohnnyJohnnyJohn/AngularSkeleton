import {Component, inject} from '@angular/core';
import {AuthFacade} from "../../../auth/auth.facade";
import {token$} from "../../../auth/state/auth.store";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private authFacade = inject(AuthFacade);
  protected token$ = token$;
  protected routeToLogin = "/auth/login";
  protected routeToRegister = "/auth/register";

  logout() {
    this.authFacade.logout()
  }
}
