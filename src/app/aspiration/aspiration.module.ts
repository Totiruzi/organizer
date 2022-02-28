import { AspirationRoutingModule } from './aspiration-routing.module'
import { BooksComponent } from './books/books.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, FormsModule, AspirationRoutingModule],
  exports: [BooksComponent],
})
export class AspirationModule {}
