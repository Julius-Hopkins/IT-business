import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Dialog } from './dialog';
import { DialogData } from './dialog.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  message(data: DialogData): void {
    this.dialog.open(Dialog, {
      width: '350px',
      data: {
        ...data,
        type: 'message',
      },
    });
  }

  confirm(data: DialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(Dialog, {
      width: '350px',
      data: {
        ...data,
        type: 'confirm',
      },
    });

    return dialogRef.afterClosed();
  }
}
