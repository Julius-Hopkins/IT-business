import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  // I am creating a constructer to
  // inject MatSbackBar for a single lifeSpan.
  // This is because without this measure it 
  // goes into a recursive loop.
  private matbar: MatSnackBar;
  constructor(){
    this.matbar = inject(MatSnackBar);
  }

  private open(message: string, config?: MatSnackBarConfig) {

    const defaults: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    };


      this.matbar.open(message, 'Close', {
      ...defaults,
      ...config
    });
  }

  success(message: string) {
    this.open(message, { panelClass: ['snackbar-success'] });
  }

  error(message: string) {
    this.open(message, {
      duration: 5000,
      panelClass: ['snackbar-error']
    });
  }

  info(message: string) {
    this.open(message);
  }

}