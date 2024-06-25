import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

interface Book{
  author:string,
  bookname:string,
  image:string,
  description:string,
  id:string,
  showMenu?: boolean;
}

@Component({
  selector: 'app-allbooks',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatCardModule,MatIconModule,MatMenuModule],
  templateUrl: './allbooks.component.html',
  styleUrl: './allbooks.component.scss'
})
export class AllbooksComponent {
  books: Book[] = [];

  ngOnInit() {
    this.books = [
      {
        author: "Harper Lee",
        bookname: "To Kill a Mockingbird",
        image: "../assets/images/tokillamocking.jpg",
        description: "A novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States.",
        id: "001"
      },
      {
        author: "Miguel de Cervantes",
        bookname: "Don Quixote",
        image: "../assets/images/donquix.jpg",
        description: "A Spanish novel by Miguel de Cervantes. It follows the adventures of Alonso Quixano who reads so many chivalric romances that he loses his sanity.",
        id: "002"
      },
      {
        author: "Herman Melville",
        bookname: "Moby-Dick",
        image: "../assets/images/mobydick.jpg",
        description: "A novel by Herman Melville, in which Captain Ahab seeks vengeance against a white whale named Moby-Dick.",
        id: "003"
      },
      {
        author: "Jane Austen",
        bookname: "Pride and Prejudice",
        image: "../assets/images/prideandpreju.jpg",
        description: "A romantic novel by Jane Austen, following the character development of Elizabeth Bennet.",
        id: "004"
      },
      {
        author: "Charlotte Brontë",
        bookname: "Jane Eyre",
        image: "../assets/images/janeeyre.jpg",
        description: "A novel by English writer Charlotte Brontë, published under the pen name 'Currer Bell'.",
        id: "005"
      },
      {
        author: "Leo Tolstoy",
        bookname: "Anna Karenina",
        image: "../assets/images/annakarenina.jpg",
        description: "A novel by Russian author Leo Tolstoy, first published in book form in 1878.",
        id: "006"
      },
      {
        author: "Emily Brontë",
        bookname: "Wuthering Heights",
        image: "../assets/images/wuthering.jpg",
        description: "A novel by Emily Brontë, published in 1847 under her pseudonym Ellis Bell.",
        id: "007"
      },
      {
        author: "F. Scott Fitzgerald",
        bookname: "The Great Gatsby",
        image: "../assets/images/thegreatgatsby.jpg",
        description: "A 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island.",
        id: "008"
      }
    ];
  }

  toggleMenu(bookId: string) {
    this.books = this.books.map(book => {
      if (book.id === bookId) {
        book.showMenu = !book.showMenu;
      } else {
        book.showMenu = false;
      }
      return book;
    });
  }

  renameBook(book: Book) {
    const newName = prompt('Enter new book name:', book.bookname);
    if (newName) {
      book.bookname = newName;
      book.showMenu = false;
    }
  }

  deleteBook(bookId: string) {
    const confirmed = confirm('Are you sure you want to delete the book?');
    if (confirmed) {
      this.books = this.books.filter(book => book.id !== bookId);
    }
  }
}

