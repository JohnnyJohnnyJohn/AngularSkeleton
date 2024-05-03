import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-authenticated-container',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.css'
})
export class AuthenticatedComponent {

}
