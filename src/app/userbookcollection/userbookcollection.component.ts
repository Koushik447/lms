import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface Book {
  author: string;
  bookname: string;
  image: string;
  description: string;
  id: string;
  rating: number;
  price: string;
}

interface Section {
  name: string;
  books: Book[];
  filteredBooks: Book[];
}

@Component({
  selector: 'app-userbookcollection',
  standalone: true,
  imports: [RouterModule, FormsModule, MatCardModule,MatButtonModule],
  templateUrl: './userbookcollection.component.html',
  styleUrls: ['./userbookcollection.component.scss']
})
export class UserbookcollectionComponent {
  books: Book[] = [
    { author: 'Harper Lee', bookname: 'To Kill a Mockingbird', image: '../assets/images/tokillamocking.jpg', description: 'A novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States.', id: '001', rating: 5, price: '₹1120' },
    { author: 'Miguel de Cervantes', bookname: 'Don Quixote', image: '../assets/images/donquix.jpg', description: 'A Spanish novel by Miguel de Cervantes. It follows the adventures of Alonso Quixano who reads so many chivalric romances that he loses his sanity.', id: '002', rating: 4, price: '₹1120' },
    { author: 'Herman Melville', bookname: 'Moby-Dick', image: '../assets/images/mobydick.jpg', description: 'A novel by Herman Melville, in which Captain Ahab seeks vengeance against a white whale named Moby-Dick.', id: '003', rating: 3, price: '₹1120' },
    { author: 'Jane Austen', bookname: 'Pride and Prejudice', image: '../assets/images/prideandpreju.jpg', description: 'A romantic novel by Jane Austen, following the character development of Elizabeth Bennet.', id: '004', rating: 5, price: '₹1120' },
    { author: 'Charlotte Brontë', bookname: 'Jane Eyre', image: '../assets/images/janeeyre.jpg', description: 'A novel by English writer Charlotte Brontë, published under the pen name "Currer Bell".', id: '005', rating: 4, price: '₹1120' },
    { author: 'Leo Tolstoy', bookname: 'Anna Karenina', image: '../assets/images/annakarenina.jpg', description: 'A novel by Russian author Leo Tolstoy, first published in book form in 1878.', id: '006', rating: 5, price: '₹1120' },
    { author: 'Emily Brontë', bookname: 'Wuthering Heights', image: '../assets/images/wuthering.jpg', description: 'A novel by Emily Brontë, published in 1847 under her pseudonym Ellis Bell.', id: '007', rating: 4, price: '₹1120' },
    { author: 'F. Scott Fitzgerald', bookname: 'The Great Gatsby', image: '../assets/images/thegreatgatsby.jpg', description: 'A 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island.', id: '008', rating: 3, price: '₹1120' }
  ];

  sections: Section[] = [
    { name: 'Your Bought Books', books: this.books.slice(0, 4), filteredBooks: this.books.slice(0, 4) },
    { name: 'Recently Reading Books', books: this.books.slice(2, 3), filteredBooks: this.books.slice(2, 3) },
    { name: 'Already Read Books', books: this.books.slice(4,6), filteredBooks: this.books.slice(4,6) }
  ];

  constructor(private router: Router) {}

  giveFeedback(bookId: string) {
    this.router.navigate(['/givefeedback'], { queryParams: { bookId } });
  }
}
