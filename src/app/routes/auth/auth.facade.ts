import { Injectable } from '@angular/core';
import { AuthResponseDto, AuthDto, RegisterDto } from './state/auth.model';
import { updateAuthState } from './state/auth.store';
import { AuthService } from './state/auth.service';
import { tap } from "rxjs/operators";
import {catchError, EMPTY} from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { SnackbarService } from "../../core/services/snackbar.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(
    private authService: AuthService,
    private snackBarService: SnackbarService,
    private router: Router
  ) {}

  login(authDto: AuthDto) {
    return this.authService.login(authDto).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error.statusCode === 401) {
          this.snackBarService.openErrorSnackBar("Email et/ou mot de passe incorrect(s)");
        } else {
          this.snackBarService.openErrorSnackBar("Échec lors de la connexion! Veuillez réessayer.");
        }
        return EMPTY
      }),
      tap({
        next: (response: AuthResponseDto) => {
          updateAuthState(response);
          this.snackBarService.openSuccessSnackBar("Connexion réussie!");
          this.router.navigate(['authenticated']);
        }
      })
    );
  }

  register(user: RegisterDto) {
    return this.authService.register(user).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error.statusCode === 400) {
          this.snackBarService.openErrorSnackBar("Cet email est déjà utilisé");
        } else {
          this.snackBarService.openErrorSnackBar("Échec lors de l\'inscription! Veuillez réessayer.");
        }
        return EMPTY
      }),
      tap({
        next: (response: AuthResponseDto) => {
          updateAuthState(response);
          this.snackBarService.openSuccessSnackBar("Inscription réussie!");
          this.router.navigate(['authenticated']);
        }
      })
    );
  }

  logout() {
    this.authService.logout();
    this.snackBarService.openSuccessSnackBar("Déconnexion réussie!");
    this.router.navigate(['']);
  }
}
