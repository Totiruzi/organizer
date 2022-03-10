import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook } from '../book.module';
import { BookService } from '../book.service';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  avalableBooks: IBook[] = [];
  // bookGenres = ["Psychology", "Programming", "Family", "Finance", "Science", "Fiction", "Other"];

  @Output() genreValue = new EventEmitter<void>()

  constructor( private bookService: BookService) { }


  ngOnInit(): void {
    this.avalableBooks = this.bookService.getAvailableBooks();
  }

  onGenrePick() {
    console.log('Submitted');
    this.genreValue.emit();
  }
}
