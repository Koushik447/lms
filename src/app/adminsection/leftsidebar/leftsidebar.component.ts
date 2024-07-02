// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { AllbooksComponent } from '../../allbooks/allbooks.component';
// import { LibrarymanagerlistComponent } from '../librarymanagerlist/librarymanagerlist.component';
// import { FormControl, FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ServicesService } from '../../../services/services.service';

// interface Book {
//   name: string;
//   author: string;
//   price: string;
//   deliveryStatus: 'Delivered' | 'Pending';
// }

// interface Customer {
//   name: string;
//   country: string;
//   image: string;
// }

// @Component({
//   selector: 'app-leftsidebar',
//   standalone: true,
//   imports: [RouterModule, AllbooksComponent, LibrarymanagerlistComponent,FormsModule,CommonModule],
//   templateUrl: './leftsidebar.component.html',
//   styleUrls: ['./leftsidebar.component.scss']
// })
// export class LeftsidebarComponent {
//   title = 'angular-sidebar';
//   isSidebarActive = true;

//   customers: Customer[] = [
//     { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'David', country: 'India', image: '../../../assets/images/userimg/user2.png' },
//     { name: 'Amit', country: 'India', image: '../../../assets/images/userimg/user2.png ' },
//   ];
//   books: any; 

//   constructor(private service: ServicesService) {}

//   data: any = {
//     'Best Seller': [],
//     'History': [],
//     'Popular Books': [],
//     'Programming': [],
//     'Romance': []
//   };

//   ngOnInit(): void {
//     this.service.getAllBooks().subscribe(
//       (response: any) => { 
//         this.data = response;
//         for (const category in this.data) {
//           if (this.data.hasOwnProperty(category)) {
//             this.data[category] = this.data[category].map((book: any) => ({ 
//               ...book,
//               showFullDescription: false
//             }));
//           }
//         }
//         console.log(this.data);
//       },
//       (error) => console.error(error)
//     );
//   }

//   toggleSidebar() {
//     this.isSidebarActive = !this.isSidebarActive;
//   }
// }
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllbooksComponent } from '../../allbooks/allbooks.component';
import { LibrarymanagerlistComponent } from '../librarymanagerlist/librarymanagerlist.component';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../../services/services.service';

interface Book {
  name: string;
  author: string;
  price: string;
  deliveryStatus: 'Delivered' | 'Pending';
}


@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [RouterModule, AllbooksComponent, LibrarymanagerlistComponent, FormsModule, CommonModule],
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent {
  title = 'angular-sidebar';
  isSidebarActive = true;
  isLoggedIn: boolean = false;

  members: any[] = [];
  
  books: any;

  data: any = {
    'Best Seller': [],
    'History': [],
    'Popular Books': [],
    'Programming': [],
    'Romance': []
  };

  constructor(private service: ServicesService) {}

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
    this.service.getUser().subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.members = response; 
        } else if (response.users && Array.isArray(response.users)) {
          this.members = response.users;
        } else {
          console.error('Unexpected response format:', response);
        }
        console.log(this.members);
      },
      (error) => console.error(error)
    );
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  objectKeys = Object.keys;
  logout(): void {
    localStorage.removeItem('user');
    sessionStorage.clear();
    
    // Clear Cache
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach(name => caches.delete(name));
      });
    }
    this.isLoggedIn = false;
    window.location.href = '/signup'; 
  }
}

