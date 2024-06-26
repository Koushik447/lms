// import { Component, OnInit } from '@angular/core';
// import { ServicesService } from '../../services/services.service';
// import { CommonModule } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';

// interface Book {
//   author: string;
//   bookname: string; // Consider renaming to "title" for consistency
//   image: string;
//   description: string;
//   id: string;
//   rating: number;
//   price: number; // Assuming price should be a number
//   showFullDescription?: boolean;
// }

// @Component({
//   selector: 'app-books',
//   standalone: true,
//   imports: [
//     MatButtonModule,
//     MatCardModule,
//     MatIconModule,
//     MatMenuModule,
//     CommonModule,
//     MatCardModule
//   ],
//   templateUrl: './books.component.html',
//   styleUrls: ['./books.component.scss']
// })
// export class BooksComponent implements OnInit {
//   books:any; 

//   constructor(private service: ServicesService) {}

//   data:any = {
//     'History':[

//     ],
//     "Romance":[

//     ]
//   }

//   ngOnInit(): void {
//     this.service.getAllBooks().subscribe(
//       (response) => (this.data = response,
//         console.log(response)
//       ),
//       (error) => console.error(error)
//     );
//   }

//   getStarsArray(rating: number): boolean[] {
//     return Array(5).fill(false).map((_, index) => index < rating);
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

interface Book {
  author: string;
  title: string;
  image_url: string;
  description: string;
  id: string;
  rating: number;
  price: number;
  showFullDescription?: boolean;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any; 

  constructor(private service: ServicesService) {}

  data: any = {
    'Best Seller': [],
    'History': [],
    'Popular Books': [],
    'Programming': [],
    'Romance': []
  };

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
}
