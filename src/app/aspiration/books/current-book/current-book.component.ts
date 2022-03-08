import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopReadingComponent } from './stop-reading.component';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.scss']
})
export class CurrentBookComponent implements OnInit {
  @Output() exitReading = new EventEmitter<void>();
  currentProgress = 0;
  timer: any;
  constructor(public matDialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.matDialog.open(StopReadingComponent, {
      data: {progress:  this.currentProgress}
    });

    dialogRef.afterClosed().subscribe(result=> {
      console.log(result);
      if (result) {
        this.exitReading.emit();
      } else {
        this.startOrResumeReading();
      }
    })
  }

  ngOnInit(): void {
    this.startOrResumeReading();
  }

  startOrResumeReading() {
    this.timer = setInterval(() => {
      this.currentProgress += 5;
      if (this.currentProgress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  stopReading() {
    clearInterval(this.timer);
    this.openDialog();
    
  }
}
