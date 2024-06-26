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
  

  // This is my api response ********************
// author:"Dane Carnegie"
// description:"About the bookdale carnegie, quoting his personal life wherein he found himself under-satisfied in a lot of situations, has synthesized his experiences and self-help messages in his book how to stop worrying and start living. The book has not just grabbed one of the most unavoidable issues in everyone s daily life ‘worry , but has parallelly provided a commentary of carnegie s exploration with how one can proceed to learn keeping worry away. It is a very intelligently knit book that would keep the reader involved in self-applying thoughts while reading the book and an urge to come back to explore more as they take a halt.the target of the book is to help readers understand what suits their respective lives best to help them reframe it in a constructive manner, subtracting worry from it and how they could focus on living each day with joy and contentment. Readers would appreciate the connect carnegie has built by taking examples of real nuances and implications one potentially faces"
// image_url:"https://cdn.kobo.com/book-images/2bf3a60b-b30a-4851-a2d7-ce0c03145041/1200/1200/False/how-to-stop-worrying-and-start-living-19.jpg"
// price:1149
// rating:"4.9"
// sub_title:"A good lifestyle can change your attitude"
// title:"How to stop worrying and start Living"
// _id : "6675d0f846cb06506c811db8"


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
