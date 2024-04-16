import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../../../shared/material/material.module";
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthDto} from "../../state/auth.model";
import {AuthFacade} from "../../../../core/facades/auth.facade";
import {SnackbarService} from "../../../../core/services/snackbar.service";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MaterialModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css'
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  hidePassword = true;

  constructor(
    private authFacade: AuthFacade,
    private snackbarService: SnackbarService,
    private formBuilder: NonNullableFormBuilder
  ){}

  onSubmit() {
    if(this.loginForm.valid) {
      this.authFacade.login(
        this.loginForm.value as AuthDto
      ).subscribe();
    } else {
      this.snackbarService.openSnackbar('Veuillez remplir tous les champs', 'error-snackbar')
    }
  }
}
