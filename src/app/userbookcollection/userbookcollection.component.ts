import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userbookcollection',
  standalone: true,
  imports: [RouterModule, FormsModule, MatCardModule,CommonModule, MatButtonModule],
  templateUrl: './userbookcollection.component.html',
  styleUrls: ['./userbookcollection.component.scss']
})
export class UserbookcollectionComponent implements OnInit {
  books: any[] = [];
  readingHistory: any[] = [];
  activeBooks: any[] = [];

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.service.getUserRentedBooks(userId).subscribe(
        (response: any) => {
          console.log(response);
          if (response?.data) {
            this.books = response.data.books || [];
            this.readingHistory = response.data.reading_book_history || [];
            this.activeBooks = response.data.active_books || [];
          } else {
            this.books = [];
            this.readingHistory = [];
            this.activeBooks = [];
          }
        },
        (error) => console.error(error)
      );
    } else {
      console.error('User ID is not available in session storage');
      this.books = [];
      this.readingHistory = [];
      this.activeBooks = [];
    }
  }

  giveFeedback(bookId: any): void {
    this.router.navigate(['/givefeedback'], { queryParams: { bookId } });
  }
}
