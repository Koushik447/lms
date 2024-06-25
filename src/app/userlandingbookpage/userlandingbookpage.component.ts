import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlandingbookpage',
  standalone: true,
  imports: [RouterModule,BooksComponent,FormsModule,CommonModule],
  templateUrl: './userlandingbookpage.component.html',
  styleUrl: './userlandingbookpage.component.scss'
})
export class UserlandingbookpageComponent {
searchQuery: string = '';
  sortMenuVisible: boolean = false;
  filterMenuVisible: boolean = false;
  selectedAuthor: string = '';
  selectedSection: string = '';
  authors: string[] = ['Author 1', 'Author 2', 'Author 3']; 
  sections: string[] = ['Section 1', 'Section 2', 'Section 3']; 
  books: any[] = []; 

  toggleSortMenu() {
    this.sortMenuVisible = !this.sortMenuVisible;
    this.filterMenuVisible = false;
  }

  toggleFilterMenu() {
    this.filterMenuVisible = !this.filterMenuVisible;
    this.sortMenuVisible = false;
  }

  sortBooks(criteria: string) {
    if (criteria === 'priceLowToHigh') {
      this.books.sort((a, b) => a.price - b.price);
    } else if (criteria === 'priceHighToLow') {
      this.books.sort((a, b) => b.price - a.price);
    }
    this.sortMenuVisible = false; // Hide the sort menu after sorting
  }

  filterBooks() {
    // Add your filtering logic here based on selectedAuthor and selectedSection
    this.filterMenuVisible = false; // Hide the filter menu after filtering
  }
}
