import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-reading',
  template: `
    <h1 mat-dialog-title>Are you sure you want to consel reading</h1>
    <mat-dialog-content>
      <p>You have {{passedData.progress}}% in progress!</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Yes</button>
      <button mat-button [mat-dialog-close]="false">No</button>
    </mat-dialog-actions>
  `
})

export class StopReadingComponent {
  false: any;

  constructor(@Inject(MAT_DIALOG_DATA) public passedData:any) { }
}