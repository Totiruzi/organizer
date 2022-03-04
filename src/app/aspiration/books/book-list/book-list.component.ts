import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input()  title: Array<string> = []
  @Input() autor: Array<string> = []
  @Input() gen: Array<string> = []
  @Input() inputTitle: string = ''
  @Input() inputAutor: string = ''
  @Input() bookGenre: string = ''

  constructor() { }

  ngOnInit(): void {
    console.log('From book list component',this.inputTitle)
  }

}
