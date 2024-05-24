import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackBar = inject(MatSnackBar);
  private duration = 3000;

  openSuccessSnackBar(
    message: string,
    action: string = "OK"
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
    action: string = "OK"
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
