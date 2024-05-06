import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  public isDarkTheme = signal<boolean>(true);

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
  }
}
