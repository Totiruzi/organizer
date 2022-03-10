import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from '../aspiration/books/books.component';
import { BookListComponent } from '../aspiration/books/book-list/book-list.component';
import { CurrentBookComponent } from '../aspiration/books/current-book/current-book.component';
import { NewBookComponent } from '../aspiration/books/new-book/new-book.component';
import { AuthGuard } from '../auth/auth.gaurd';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'bookList', component: BookListComponent },
  { path: 'currentBook', component: CurrentBookComponent, canActivate: [AuthGuard] },
  { path: 'book', component: NewBookComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AspirationRoutingModule {}
