import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AspirationRoutingModule } from './aspiration-routing.module';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AspirationRoutingModule
  ],
  exports: [
    BooksComponent
  ]
})
export class AspirationModule { }
