import { Component, OnDestroy, OnInit } from '@angular/core'
import { BookService } from './book.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  currentBook = false;
  chosenBookSubscribtion!: Subscription;

  constructor( private bookService: BookService) {}

  ngOnInit(): void {
    this.chosenBookSubscribtion = this.bookService.choosenBook.subscribe( book => {
      if (book) {
        this.currentBook = true;
      } else {
        this.currentBook = false;
      }
    })
  }

  onSubmit(event: any) {
    
  }
  recievdGenreValue() {
    // this.currentBook = true;
  }

  ngOnDestroy(): void {
    this.chosenBookSubscribtion.unsubscribe();
  }
}
