import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services/services.service';

export interface Book {
  author: string;
  bookname: string;
  image: string;
  description: string;
  id: string;
  _id: string;
  showFullDescription?: boolean;
  showMenu?: boolean;
  title: string;
  sub_title: string;
  price: string;
  image_url: string;
  rating: string;
}

@Component({
  selector: 'app-allbooks',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.scss']
})
export class AllbooksComponent implements OnInit {

  books: any; 
  data: any = {
    'Best Seller': [],
    'History': [],
    'Popular Books': [],
    'Programming': [],
    'Romance': []
  };

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(
      (response: any) => { 
        this.data = response;
        for (const category in this.data) {
          if (this.data.hasOwnProperty(category)) {
            this.data[category] = this.data[category].map((book: any) => ({ 
              ...book,
              showFullDescription: false
            }));
          }
        }
        console.log(this.data);
      },
      (error) => console.error(error)
    );
  }

  getStarsArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  toggleDescription(book: any): void {
    book.showFullDescription = !book.showFullDescription;
  }

  renameBook(id: any): void {
    this.books = id;
    sessionStorage.setItem('bookId', id);
  }

  deleteBook(bookId: string): void {
    const confirmed = confirm('Are you sure you want to delete the book?');
    if (confirmed) {
      this.service.deletBook(bookId).subscribe(
        (response: any) => {
          alert(response.message);
        },
        (error) => {
          console.error(error);
          alert(error.statusText);
        }
      );
    }
  }

}
