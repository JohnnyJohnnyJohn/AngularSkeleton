import { Component } from '@angular/core';
import { MaterialModule } from "../../../../shared/material/material.module";
import { FlexModule } from "@angular/flex-layout";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    FlexModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
