import { Injectable } from "@angular/core";
import { IBook } from "./book.module";

import { Subject } from "rxjs";

@Injectable()
export class BookService {
  choosenBook = new Subject<IBook | undefined>();
  private avalableBooks: IBook[] = [
    { 
      id: "1", 
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      genre: "Fantasy", 
      description: "The Hobbit, or There and Back Again, is a children's fantasy novel written by English author and scholar J. R. R. Tolkien. It is part of the Tolkien Children's Library project, which was begun in December 1937 as a school project by Charles Lutwidge Dodgson, Jr., and later expanded to include young children aged 2–7. The story follows the events of the fictional Bilbo Baggins, a Hobbit who embarks on an adventure to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.", 
      image: "assets/images/hobbit.jpg", 
      pageNumber: 295, 
      startDate: new Date(2017, 1, 1), 
      state: "complete", 
      takeaway: "The Hobbit is a children's fantasy novel written by English author and scholar J. R. R. Tolkien. It is part of the Tolkien Children's Library project, which was begun in December 1937 as a school project by Charles Lutwidge Dodgson, Jr., and later expanded to include young children aged 2–7. The story follows the events of the fictional Bilbo Baggins, a Hobbit who embarks on an adventure to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug." 
    },
    { 
      id: "2",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "The Lord of the Rings is a fantasy novel written by English author and scholar J. R. R. Tolkien. It is part of the Tolkien Children's Library project, which was begun in December 1937 as a school project by Charles Lutwidge Dodgson, Jr., and later expanded to include young children aged 2–7. The story follows the events of the fictional Bilbo Baggins, a Hobbit who embarks on an adventure to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.",
      image: "assets/images/lotr.jpg",
      pageNumber: 456,
      startDate: new Date(2017, 1, 1),
      state: "notStarted",
      takeaway: "The Lord of the Rings is a fantasy novel written by English author and scholar J. R. R. Tolkien. It is part of the Tolkien Children's Library project, which was begun in December 1937 as a school project by Charles Lutwidge Dodgson, Jr., and later expanded to include young children aged 2–7. The story follows the events of the fictional Bilbo Baggins, a Hobbit who embarks on an adventure to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug."
    },
    {
      id: "3",
      title: "Software Engineering",
      author: "Robert C. Martin",
      genre: "programming",
      description: "The art of understanding how with a mind of its own, we can create software that solves real-world problems. This book is a comprehensive guide to software engineering, covering the theory, tools, and practices of the field. It is a guide for software engineers, software architects, and software developers. It is a guide for software developers, software testers, and software engineers.",
      image: "assets/images/software-engineering.jpg",
      pageNumber: 556,
      startDate: new Date(2017, 1, 1),
      state: "inProgress",
      takeaway: "The art of understanding how with a mind of its own, we can create software that solves real-world problems. This book is a comprehensive guide to software engineering, covering the theory, tools, and practices of the field. It is a guide for software engineers, software architects, and software developers. It is a guide for software developers, software testers, and software engineers."
    },
    {
      id: "4",
      title: "The art of Parenting",
      author: "Karen A. Smith",
      genre: "family",
      description: "Parenting is a skill that can be taught to children. It is a skill that can be taught to adults. It is a skill that can be taught to anyone. This book is a comprehensive guide to parenting, covering the theory, tools, and practices of the field. It is a guide for parents, teachers, and anyone who wants to learn how to parent.",
      image: "assets/images/parenting.jpg",
      pageNumber: 856,
      startDate: new Date(2017, 1, 1),
      state: "inProgress",
      takeaway: "Parenting is a skill that can be taught to children. It is a skill that can be taught to adults. It is a skill that can be taught to anyone. This book is a comprehensive guide to parenting, covering the theory, tools, and practices of the field. It is a guide for parents, teachers, and anyone who wants to learn how to parent."
    },
  ]

  private currentBook: IBook | undefined;

  getAvailableBooks(): IBook[] {
    return this.avalableBooks;
  }

  startReading(selectedBookId: string) {
    this.currentBook = this.avalableBooks.find(book => book.id === selectedBookId);
    // this.choosenBook.next({ ...this.currentBook });
  }

}