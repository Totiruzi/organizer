import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from 'src/app/aspiration/books/books.component';
import { BookListComponent } from 'src/app/aspiration/books/book-list/book-list.component';
import { CurrentBookComponent } from 'src/app/aspiration/books/current-book/current-book.component';
import { ReadBooksComponent } from 'src/app/aspiration/books/read-books/read-books.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'bookList', component: BookListComponent },
  { path: 'currentBook', component: CurrentBookComponent },
  { path: 'readBooks', component: ReadBooksComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class AspirationRoutingModule {}
