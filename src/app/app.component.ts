import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./standalone/header/header.component";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HeaderComponent, FlexModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSkeleton';
}
