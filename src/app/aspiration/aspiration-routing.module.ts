import { RouterModule, Routes } from '@angular/router'

import { BooksComponent } from './books/books.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  { path: '', component: BooksComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class AspirationRoutingModule {}
