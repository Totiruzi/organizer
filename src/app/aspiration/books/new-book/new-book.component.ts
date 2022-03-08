import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  bookGenres = ["Psychology", "Programming", "Family", "Finance", "Science", "Fiction", "Other"];

  @Output() genreValue = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onGenrePick() {
    console.log('Submitted');
    this.genreValue.emit();
  }
}
