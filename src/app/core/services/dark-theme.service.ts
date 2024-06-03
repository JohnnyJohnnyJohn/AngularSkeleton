import {effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  public isDarkTheme = signal<boolean>(this.setInitialTheme());

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
  }

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
      'change',
      e => {
        this.isDarkTheme.set(e.matches);
        localStorage.setItem('dark-theme', e.matches.toString());
      }
    );

    effect(() => {
      localStorage.setItem('dark-theme', this.isDarkTheme().toString());

      if (this.isDarkTheme()) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  setInitialTheme() {
    let initialValue = localStorage.getItem('dark-theme') ?
      localStorage.getItem('dark-theme') === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('dark-theme', initialValue.toString());

    return initialValue;
  }
}
