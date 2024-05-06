import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  public isDarkTheme = signal<boolean>(
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?? true
  );

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    localStorage.setItem('dark-theme', this.isDarkTheme().toString());
  }

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.isDarkTheme.set(e.matches);
      localStorage.setItem('dark-theme', e.matches.toString());
    });
  }
}
