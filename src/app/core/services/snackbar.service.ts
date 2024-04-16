import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(
    message: string,
    panelClass: string = '',
    action: string | undefined = undefined,
    duration: number = 3000
  ) {
    console.log('panelClass', panelClass);
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: panelClass
    });
  }
}
