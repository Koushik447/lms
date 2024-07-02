import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ServicesService } from '../../services/services.service';
import { AllbooksComponent, Book } from '../allbooks/allbooks.component'; // Assuming Book interface is exported from allbooks.component.ts
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatebook',
  standalone: true,
  imports: [
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterLink,
    MatDatepickerModule,
    AllbooksComponent
  ],
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.scss']
})
export class UpdatebookComponent implements OnInit {
  




  data:any={
    title: '',
    sub_title: '',
    author: '',
    description: '',
    price: '',
    image_url: '',
    _id: ''
  }
  updata:any={
    "title": '',
    "sub_title": '',
    "author": '',
    "description": '',
    "price": '',
    "image_url": ''
  }


  constructor(private service: ServicesService,
    private router:Router
  ) {}

  ngOnInit(): void {
    const bookId = sessionStorage.getItem('bookId');
    if (bookId) {
      this.service.getBookById(bookId).subscribe(
        (response) => {
          this.data = response;
          // console.log(this.data)
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('No bookId found in session storage');
    }
  }

  updatebook(){
    // console.log(this.data['_id'])
    const id = String(this.data['_id'])
    // console.log(id)
    // console.log('***************************')
    this.service.updatebook(id,this.data).subscribe(
      (response:any) => {
        alert(response.message);
        // console.log(response.message)
      },
      (error) => {
        console.error(error);
        alert('Something went wrong......');
      }
    );
  }
  deletebook() {
    const bookid = sessionStorage.getItem('bookId');
    console.log(bookid);
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Your book is now deleting .......');
        this.service.deletBook(bookid).subscribe(
          (response: any) => {
            Swal.fire({
              title: "Deleted!",
              text: response.message,
              icon: "success"
            }).then(() => {
              this.router.navigate(['/allbooks']);
            });
          },
          (error) => {
            console.error(error);
            Swal.fire({
              title: "Error!",
              text: error.statusText,
              icon: "error"
            });
          }
        );
      }
    });
  }
}
