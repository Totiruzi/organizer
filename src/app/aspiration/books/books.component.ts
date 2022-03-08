import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  currentBook = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    
  }
  recievdGenreValue() {
    // this.currentBook = true;
  }
}
