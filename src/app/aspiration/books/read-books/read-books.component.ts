import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.scss']
})
export class ReadBooksComponent implements OnInit, AfterViewInit {
  displayedBookColumns = ['author','title',  'genre', 'state', 'endDate', 'spentTime', 'takeaway'];
  dataBookSource =  new MatTableDataSource<IBook | null>();

  @ViewChild(MatSort , {static: true}) sort!: MatSort;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.dataBookSource.data = this.bookService.getCompletedOrCancelledBookState();
  }

  ngAfterViewInit(): void {
    this.dataBookSource.sort = this.sort;
  }

}
