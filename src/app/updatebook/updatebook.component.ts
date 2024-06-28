import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ServicesService } from '../../services/services.service';
import { AllbooksComponent, Book } from '../allbooks/allbooks.component'; // Assuming Book interface is exported from allbooks.component.ts

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
  deletebook(){
    const confirmed = confirm('Are you sure you want to delete the book?');
    const bookid=sessionStorage.getItem('bookId')
    console.log(bookid)
    if (confirmed) {
      console.log('Your book is now deletting .......')
      this.service.deletBook(bookid).subscribe(
        (response:any)=>{
          alert(response.message);
          //Redirect the the allBook component....

          this.router.navigate(['/allbooks']);
        },
        (error)=>{
          console.error(error);
          alert(error.statusText)
        }
      )

    }
  }
}
