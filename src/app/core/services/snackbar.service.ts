import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  duration = 3000;

  openSuccessSnackBar(
    message: string,
    action?: string
  ) {
    this.snackBar.open(
      message,
      action,
      {
        duration: this.duration,
        panelClass: 'success-snackbar'
      }
    );
  }

  openErrorSnackBar(
    message: string,
    action?: string,
  ) {
    this.snackBar.open(
      message,
      action,
      {
        duration: this.duration,
        panelClass: 'error-snackbar'
      }
    );
  }
}
