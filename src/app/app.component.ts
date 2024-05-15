import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotificationsComponent} from "./standalone/notifications/notifications.component";
import {ModalComponent} from "./standalone/modal/modal.component";
import {HeaderComponent} from "./standalone/header/header.component";
import {DarkThemeService} from "./core/services/dark-theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NotificationsComponent, ModalComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkThemeService = inject(DarkThemeService);
  title = 'AngularSkeleton';
  isDarkTheme = this.darkThemeService.isDarkTheme
}
