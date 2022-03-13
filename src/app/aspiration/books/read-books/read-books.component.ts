import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.scss']
})
export class ReadBooksComponent implements OnInit {
  displayedBookColumns = ['author','title',  'genre', 'state', 'endDate', 'spentTime', 'takeaway'];
  dataBookSource =  new MatTableDataSource<IBook | null>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.dataBookSource.data = this.bookService.getCompletedOrCancelledBookState();
  }

}
