import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterLink} from "@angular/router";
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {RegisterDto} from "../../state/auth.model";
import {AuthFacade} from "../../auth.facade";
import {SnackbarService} from "../../../../core/services/snackbar.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FlexLayoutModule,
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './register.component.html',
  styleUrl: '../auth.component.css'
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    lastname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, this.confirmPasswordValidator]]
  })

  hidePassword = true;

  constructor(
    private authFacade: AuthFacade,
    private snackbarService: SnackbarService,
    private formBuilder: NonNullableFormBuilder
  ) {}

  onSubmit() {
    if(this.registerForm.valid) {
      this.authFacade.register(
        this.registerForm.value as RegisterDto
      ).subscribe();
    } else {
      let errorMessage;

      if(this.registerForm.controls.email.hasError('email')) {
        errorMessage = 'Veuillez entrer un email valide'
      } else if(this.registerForm.controls.password.hasError('minlength')) {
        errorMessage = 'Le mot de passe doit contenir au moins 6 caractères'
      } else if(this.registerForm.controls.confirmPassword.hasError('PasswordNoMatch')) {
        errorMessage = 'Les mots de passes ne sont pas identiques'
      } else {
        errorMessage = 'Veuillez remplir tous les champs'
      }

      this.snackbarService.openErrorSnackBar(errorMessage)
    }
  }

  getEmailErrorMessage() {
    if (this.registerForm.controls.email.hasError('required')) {
      return 'Veuillez entrer votre email';
    }

    return this.registerForm.controls.email
      .hasError('email') ? 'Veuillez entrer un email valide' : '';
  }

  getPasswordErrorMessage() {
    if (this.registerForm.controls.password.hasError('required')) {
      return 'Veuillez entrer un mot de passe';
    }

    return this.registerForm.controls.password
      .hasError('minlength') ? '6 caractères minimum pour le mot de passe' : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.registerForm.controls.confirmPassword.hasError('required')) {
      return 'Veuillez confirmer votre mot de passe';
    }

    return this.registerForm.controls.confirmPassword
      .hasError('PasswordNoMatch') ? 'Les mots de passes ne sont pas identiques' : '';
  }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    return control.parent?.value.password === control.value
      ? null
      : { PasswordNoMatch: true };
  }
}
