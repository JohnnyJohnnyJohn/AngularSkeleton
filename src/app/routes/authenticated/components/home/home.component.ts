import { Component, inject } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { token$ } from "../../../auth/state/auth.store";
import { AuthFacade } from "../../../auth/auth.facade";
import { AsyncPipe } from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FlexModule,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
