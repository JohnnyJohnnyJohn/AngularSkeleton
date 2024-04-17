import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../../../shared/material/material.module";
import {RouterLink} from "@angular/router";
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {RegisterDto} from "../../state/auth.model";
import {AuthFacade} from "../../../../core/facades/auth.facade";
import {SnackbarService} from "../../../../core/services/snackbar.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MaterialModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: '../auth.component.css'
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    lastName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
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
      .hasError('minlength') ? 'Le mot de passe doit contenir au moins 6 caractères' : '';
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
