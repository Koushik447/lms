import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface Member {
  name: string;
  images: string;
  email: string;
  phone: string;
  memberId: string;
  libraryname: string;
}

interface Book {
  author: string;
  bookname: string;
  image: string;
  description: string;
  id: string;
  rating: number;
  price: string;
  issuedate: Date;
  returnstatus: string;
  returndate?: Date; // Optional return date field
  username: string;
}

@Component({
  selector: 'app-managerdetails',
  standalone: true,
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './managerdetails.component.html',
  styleUrls: ['./managerdetails.component.scss']
})
export class ManagerdetailsComponent {
  members: Member[] = [];
  books: Book[] = [];

  ngOnInit() {
    this.members = [
      {
        name: 'John Doe',
        images: "../assets/images/userimg/user1.jpg",
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        memberId: '123456',
        libraryname: 'Koushik Library'
      }
    ];

    this.books = [
      {
        author: 'Harper Lee',
        bookname: 'To Kill a Mockingbird',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f',
        description: 'A novel by Harper Lee published in 1960.',
        id: '001',
        rating: 5,
        price: '₹1120',
        issuedate: new Date('2023-05-15'),
        returnstatus: 'Returned',
        returndate: new Date('2023-05-25'), // Example return date
        username: 'Alice Smith'
      },
      {
        author: 'Miguel de Cervantes',
        bookname: 'Don Quixote',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v',
        description: 'A Spanish novel by Miguel de Cervantes.',
        id: '002',
        rating: 4,
        price: '₹1120',
        issuedate: new Date('2023-04-20'),
        returnstatus: 'Not Returned',
        username: 'Bob Johnson'
      }
      ,
      {
        author: 'Miguel de Cervantes',
        bookname: 'Don Quixote',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v',
        description: 'A Spanish novel by Miguel de Cervantes.',
        id: '002',
        rating: 4,
        price: '₹1120',
        issuedate: new Date('2023-04-20'),
        returnstatus: 'Not Returned',
        username: 'Bob Johnson'
      }
      ,
      {
        author: 'Miguel de Cervantes',
        bookname: 'Don Quixote',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v',
        description: 'A Spanish novel by Miguel de Cervantes.',
        id: '002',
        rating: 4,
        price: '₹1120',
        issuedate: new Date('2023-04-20'),
        returnstatus: 'Not Returned',
        username: 'Bob Johnson'
      },
      
      {
        author: 'Miguel de Cervantes',
        bookname: 'Don Quixote',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v',
        description: 'A Spanish novel by Miguel de Cervantes.',
        id: '002',
        rating: 4,
        price: '₹1120',
        issuedate: new Date('2023-04-20'),
        returnstatus: 'Not Returned',
        username: 'Bob Johnson'
      },
      {
        author: 'Miguel de Cervantes',
        bookname: 'Don Quixote',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v',
        description: 'A Spanish novel by Miguel de Cervantes.',
        id: '002',
        rating: 4,
        price: '₹1120',
        issuedate: new Date('2023-04-20'),
        returnstatus: 'Not Returned',
        username: 'Bob Johnson'
      },
      {
        author: 'Miguel de Cervantes',
        bookname: 'Don Quixote',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v',
        description: 'A Spanish novel by Miguel de Cervantes.',
        id: '002',
        rating: 4,
        price: '₹1120',
        issuedate: new Date('2023-04-20'),
        returnstatus: 'Not Returned',
        username: 'Bob Johnson'
      }
    ];
  }

  trackByFn(index: number, item: any): any {
    return item.id; // or unique field in your data
  }

  // Method to check if there are books with return status 'Returned'
  hasReturnDate(): boolean {
    return this.books.some(book => book.returnstatus === 'Returned');
  }
}
