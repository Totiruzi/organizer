import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AspirationRoutingModule } from './aspiration-routing.module'

import { BookListComponent } from './books/book-list/book-list.component';
import { BooksComponent } from './books/books.component'
import { ReadBooksComponent } from './books/read-books/read-books.component';
import { CurrentBookComponent } from './books/current-book/current-book.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, ReadBooksComponent, CurrentBookComponent],
  imports: [CommonModule, RouterModule, FormsModule, AspirationRoutingModule],
  exports: [BooksComponent],
})
export class AspirationModule {}
