import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthDto} from "../../state/auth.model";
import {AuthFacade} from "../../auth.facade";
import {NotificationService} from "../../../../core/services/notification.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FlexLayoutModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', Validators.required],
  });

  hidePassword = true;

  constructor(
    private authFacade: AuthFacade,
    private notificationService: NotificationService,
    private formBuilder: NonNullableFormBuilder
  ){}

  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'Veuillez entrer votre email';
    }

    return this.loginForm.controls.email
      .hasError('pattern') ? 'Veuillez entrer un email valide' : '';
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.authFacade.login(
        this.loginForm.value as AuthDto
      ).subscribe();
    } else {
      let errorMessage;

      if(this.loginForm.controls.email.hasError('pattern')) {
        errorMessage = 'Veuillez entrer un email valide';
      } else {
        errorMessage = 'Veuillez remplir tous les champs';
      }

      this.notificationService.notify('Erreur de connexion', errorMessage, 'error');
    }
  }
}
