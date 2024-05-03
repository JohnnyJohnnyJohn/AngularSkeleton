import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotificationsComponent} from "./standalone/notifications/notifications.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSkeleton';
}
