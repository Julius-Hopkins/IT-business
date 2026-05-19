import { Component, inject, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogData } from './dialog.model';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.html',
  imports: [MatDialogActions, MatDialogContent, CommonModule],
  styleUrls: ['./dialog.scss'],
})
export class Dialog {
  constructor(
    private location: Location,
    private dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  private componentList = ['pizza', 'person', 'topping', 'order'];

  public router = inject(Router);

  confirm(): void {
    this.dialogRef.close(true);
    for (let i = 0; i < this.componentList.length; i++) {
      if (this.location.path().includes(this.componentList[i])) {
        this.router.navigate(['/' + this.componentList[i] + '/list']);
      }
    }
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
