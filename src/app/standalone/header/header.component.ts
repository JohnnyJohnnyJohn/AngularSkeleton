import {Component, inject} from '@angular/core';
import {AuthFacade} from "../../routes/auth/auth.facade";
import {token$} from "../../routes/auth/state/auth.store";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ModalService} from "../../core/services/modal.service";
import {DarkThemeService} from "../../core/services/dark-theme.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private authFacade = inject(AuthFacade);
  protected modalService = inject(ModalService);
  protected darkThemeService = inject(DarkThemeService);
  protected token$ = token$;
  protected routeToLogin = "/auth/login";
  protected routeToRegister = "/auth/register";

  isMobileMenuOpen = false;
  isProfileMenuOpen = false;

  logout() {
    this.modalService.openModal({
      title: 'Déconnexion',
      message: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      action: 'Déconnexion',
      isVisible: true,
      confirm: () => this.authFacade.logout()
    });
  }
}
