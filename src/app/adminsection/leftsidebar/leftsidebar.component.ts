import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllbooksComponent } from '../../allbooks/allbooks.component';
import { LibrarymanagerlistComponent } from '../librarymanagerlist/librarymanagerlist.component';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Book {
  name: string;
  author: string;
  price: string;
  deliveryStatus: 'Delivered' | 'Pending';
}

interface Customer {
  name: string;
  country: string;
  image: string;
}

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [RouterModule, AllbooksComponent, LibrarymanagerlistComponent,FormsModule,CommonModule],
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent {
  title = 'angular-sidebar';
  isSidebarActive = true;

  books: Book[] = [
    { name: 'David Copperfield', author: 'Koushik Sarakr', price: '1120', deliveryStatus: 'Delivered' },
    { name: 'Don Quixote', author: 'Koushik Sarakr', price: '2100', deliveryStatus: 'Pending' },
    { name: 'Pride and Prejudice', author: 'Koushik Sarakr', price: '1450', deliveryStatus: 'Delivered' },
    { name: 'David Copperfield', author: 'Koushik Sarakr', price: '1212', deliveryStatus: 'Pending' },
    { name: 'Pride and Prejudice', author: 'Koushik Sarakr', price: '2013', deliveryStatus: 'Delivered' },
    { name: 'David Copperfield', author: 'Koushik Sarakr', price: '1111', deliveryStatus: 'Pending' },
    { name: 'Don Quixote', author: 'Koushik Sarakr', price: '2988', deliveryStatus: 'Delivered' },
    { name: 'Pride and Prejudice', author: 'Koushik Sarakr', price: '1224', deliveryStatus: 'Pending' },
  ];

  customers: Customer[] = [
    { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
    { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png ' },
  ];

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
}
