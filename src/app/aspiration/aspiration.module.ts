import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AspirationRoutingModule } from './aspiration-routing.module'
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { BookListComponent } from './books/book-list/book-list.component';
import { BooksComponent } from './books/books.component'
import { NewBookComponent } from './books/new-book/new-book.component';
import { CurrentBookComponent } from './books/current-book/current-book.component';
import { ReadBooksComponent } from './books/read-books/read-books.component';
import { StopReadingComponent } from './books/current-book/stop-reading.component';
import { BookService } from './books/book.service';

@NgModule({
  declarations: [BooksComponent, BookListComponent, NewBookComponent, CurrentBookComponent, ReadBooksComponent, StopReadingComponent],
  imports: [CommonModule, RouterModule, FormsModule, AspirationRoutingModule, AngularMaterialModule],
  exports: [BooksComponent],
  providers: [BookService],
})
export class AspirationModule {}
