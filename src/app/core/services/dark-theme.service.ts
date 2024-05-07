import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  private isDarkThemeInitialValue = localStorage.getItem('dark-theme');

  public isDarkTheme = signal<boolean>(this.setInitialTheme());

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    localStorage.setItem('dark-theme', this.isDarkTheme().toString());
  }

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
      'change',
      e => {
        this.isDarkTheme.set(e.matches);
        localStorage.setItem('dark-theme', e.matches.toString());
      }
    );
  }

  setInitialTheme() {
    let initialValue = this.isDarkThemeInitialValue ? this.isDarkThemeInitialValue === 'true' :
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('dark-theme', initialValue.toString());
    return initialValue;
  }
}
