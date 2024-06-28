import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-addmanager',
  standalone: true,
  imports: [RouterModule,MatInputModule,MatFormFieldModule,FormsModule,MatDatepickerModule,MatIconModule,MatButtonModule],
  templateUrl: './addmanager.component.html',
  styleUrl: './addmanager.component.scss'
})
export class AddmanagerComponent implements OnInit{
  
  hide: boolean = true;
[x: string]: any;
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

constructor (private service:ServicesService){}
  data:any={
    "library_id":'',
    "name":'',
    "email":'',
    "mobile":'',
    "password":'',
    "profile_url":'',
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("Hiiii")
  }

  admanager(){
    console.log(this.data)
    this.service.addManager(this.data).subscribe(
      (response)=>{
        alert('Manager Added Succesfully');
        console.log(response)
      },
      (error)=> console.error(error)

    )
  }

}
