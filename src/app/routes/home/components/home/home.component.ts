import { Component, inject } from '@angular/core';
import { MaterialModule } from "../../../../shared/material/material.module";
import { FlexModule } from "@angular/flex-layout";
import { token$ } from "../../../auth/state/auth.store";
import { AuthFacade } from "../../../../core/facades/auth.facade";
import { AsyncPipe } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    FlexModule,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private authFacade = inject(AuthFacade);
  protected token$ = token$;
  protected routeToLogin = "/auth/login";

  logout() {
    this.authFacade.logout();
  }
}
