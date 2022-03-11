import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from '../book.service';
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
  constructor(public matDialog: MatDialog, private bookService: BookService) { }

  openDialog() {
    const dialogRef = this.matDialog.open(StopReadingComponent, {
      data: {progress:  this.currentProgress}
    });

    dialogRef.afterClosed().subscribe(result=> {
      console.log(result);
      if (result) {
        this.bookService.readingCanceled();
      } else {
        this.startOrResumeReading();
      }
    })
  }

  ngOnInit(): void {
    this.startOrResumeReading();
  }

  startOrResumeReading() {
    // readingTime takes the duration of the the time to read the book into account
    const readingTime = this.bookService.getCurrentReadingBook().pageNumber/100 * 1000;
    this.timer = setInterval(() => {
      this.currentProgress += 1;
      if (this.currentProgress >= 100) {
        this.bookService.readingComplete();
        clearInterval(this.timer);
      }
    }, readingTime);
  }

  stopReading() {
    clearInterval(this.timer);
    this.openDialog();
    
  }
}
