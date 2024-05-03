import { Injectable } from '@angular/core';
import { AuthResponseDto, AuthDto, RegisterDto } from './state/auth.model';
import { updateAuthState } from './state/auth.store';
import { AuthService } from './state/auth.service';
import { tap } from "rxjs/operators";
import {catchError, EMPTY} from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { NotificationService } from "../../core/services/notification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  login(authDto: AuthDto) {
    return this.authService.login(authDto).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error.statusCode === 401) {
          this.notificationService.notify(
            "Erreur de connexion",
            "Email et/ou mot de passe incorrect(s)",
            'error'
          );
        } else {
          this.notificationService.notify(
            "Erreur de connexion",
            "Échec lors de la connexion! Veuillez réessayer.",
            'error'
          );
        }
        return EMPTY
      }),
      tap({
        next: (response: AuthResponseDto) => {
          updateAuthState(response);
          this.notificationService.notify(
            "Connexion réussie!",
            "Bienvenue!",
            'success'
          );
          this.router.navigate(['']);
        }
      })
    );
  }

  register(registerDto: RegisterDto) {
    return this.authService.register(registerDto).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error.statusCode === 400) {
          this.notificationService.notify(
            "Erreur d'inscription",
            "Cet email est déjà utilisé",
            'error'
          );
        } else {
          this.notificationService.notify(
            "Erreur d'inscription",
            "Échec lors de l\'inscription! Veuillez réessayer.",
            'error'
          );
        }
        return EMPTY
      }),
      tap({
        next: (response: AuthResponseDto) => {
          updateAuthState(response);
          this.notificationService.notify(
            "Inscription réussie!",
            "Bienvenue!",
            'success'
          );
          this.router.navigate(['']);
        }
      })
    );
  }

  logout() {
    this.authService.logout();
    this.notificationService.notify(
      "Déconnexion réussie!",
      "À bientôt!",
      'info'
    );
  }
}
