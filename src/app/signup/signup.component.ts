import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private container!: HTMLElement;
  private overlayCon!: HTMLElement;
  private overlayBtn!: HTMLButtonElement;

  ngOnInit(): void {
    this.container = document.getElementById('container') as HTMLElement;
    this.overlayCon = document.getElementById('overlayCon') as HTMLElement;
    this.overlayBtn = document.getElementById('overlayBtn') as HTMLButtonElement;
    
    this.overlayBtn.addEventListener('click', this.handleOverlayClick.bind(this));

    const signUpForm = document.querySelector('.sign-up-container form') as HTMLFormElement;
    const signInForm = document.querySelector('.sign-in-container form') as HTMLFormElement;

    
  }

  handleOverlayClick(): void {
    this.container.classList.toggle('right-panel-active');

    this.overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(() => {
      this.overlayBtn.classList.add('btnScaled');
    });
  }

  data = {
    "name":'',
    "email":'',
    "password":'',
    "mobile":''
  }
logdata = {
  "email":'',
  "password":'',
  "role":''
}
  constructor(
    private service : ServicesService,
    private router: Router
  ){}
  

  public register(){
    console.log(this.data)
    this.service.signup(this.data).subscribe(
      (response)=>{
        alert('User Registered Successfully.')
      },
      (error)=>{
        console.log(error)
        alert('Something went wrong....')
      }
    )
  }
  
  public login(){
    console.log(this.logdata)
    this.service.login(this.logdata).subscribe(
      (response)=>{
        alert('User Login Successfull...')
        // this.router.navigate(['/user']);
        // this.router.navigate(['/addashbord']);
        // this.router.navigate(['/librarymanager']);
        if (this.logdata.role === 'user') {
          this.router.navigate(['/user']);
        } else if (this.logdata.role === 'admin') {
          this.router.navigate(['/addashbord']);
        } else if (this.logdata.role === 'manager') {
          this.router.navigate(['/librarymanager']);
        } else {
          alert('Invalid role...');
        }
      },
      (error)=>{
        alert('Something Went Wrong...')
        console.log(error)
      }
    )
  }
}
