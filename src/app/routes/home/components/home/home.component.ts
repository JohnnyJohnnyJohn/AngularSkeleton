import { Component, inject } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { token$ } from "../../../auth/state/auth.store";
import { AuthFacade } from "../../../auth/auth.facade";
import { AsyncPipe } from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FlexModule,
    AsyncPipe,
    RouterLink,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
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
