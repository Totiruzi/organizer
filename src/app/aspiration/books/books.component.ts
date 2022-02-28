import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  title: any = []
  autor: any = []
  gen: any = []
  inputTitle: string = ''
  inputAutor: string = ''
  bookGen: string = ''

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault()
    this.title.push(this.inputTitle)
    this.autor.push(this.inputAutor)
    this.gen.push(this.bookGen)
  }

  titleInput(event: any) {
    console.log(event.target.value)
    // this.title = event.target.value;
  }

  autorInput(event: any) {
    console.log(event.target.value)
    // this.title = event.target.value;
  }

  genInput(event: any) {
    console.log(event.target.value)
    // this.title = event.target.value;
  }
}
