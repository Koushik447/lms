import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [RouterLink,MatInputModule,MatFormFieldModule,FormsModule,MatDatepickerModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.scss'
})
export class AddbookComponent implements OnInit{

  data = {
    "title":'',
    "author":'',
    "description":'',
    "image_url":'',
    "price":'',
    "rating":'',
    "sub_title":''
  }


  constructor(
    private service : ServicesService
  ){}

  ngOnInit(): void {
    // console.log(this.data);
    // this.service.addbooks(this.data).subscribe(
    //   (reponse)=>{
        
    //     alert("Book Added Sucessfully...")
    //   },
    //   (error)=>{
    //     console.log(error)
    //     alert("Something Went Wrong...")
    //   }
    // )
    console.log("Hii")
  }
  adbook(){
    console.log(this.data);
    this.service.addbooks(this.data).subscribe(
      (reponse)=>{
        
        alert("Book Added Sucessfully...")
      },
      (error)=>{
        console.log(error)
        alert("Something Went Wrong...")
      }
    )
  }
  selectedImageFile: File | null = null;
  selectedBookFile: File | null = null;

  onFileSelected(event: Event, fileType: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (fileType === 'image') {
        this.selectedImageFile = input.files[0];
        console.log('Selected image file:', this.selectedImageFile);
      } else if (fileType === 'bookFile') {
        this.selectedBookFile = input.files[0];
        console.log('Selected book file:', this.selectedBookFile);
      }
    }
  }



}
