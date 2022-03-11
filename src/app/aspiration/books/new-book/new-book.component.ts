import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.model';
import { BookService } from '../book.service';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  avalableBooks: IBook[] = [];
  // bookGenres = ["Psychology", "Programming", "Family", "Finance", "Science", "Fiction", "Other"];

  constructor( private bookService: BookService) { }


  ngOnInit(): void {
    this.avalableBooks = this.bookService.getAvailableBooks();
  }

  onBookPick(form: NgForm) {
    console.log('Submitted');
    this.bookService.startReading(form.value.book);
  }
}
