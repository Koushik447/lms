import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

interface Viewmember{
  membername:string,
  memberimage:string,
  memberlocation:string
}

@Component({
  selector: 'app-viewmember',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatCardModule],
  templateUrl: './viewmember.component.html',
  styleUrl: './viewmember.component.scss'
})
export class ViewmemberComponent {

  member:Viewmember[]=[];

  ngOnInit(){
    this.member = [
      {
        membername:"Koushik Sarkar",
        memberimage:"../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      },
      {
        membername:"Koushik Sarkar",
        memberimage:"../../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      },
      {
        membername:"Koushik Sarkar",
        memberimage:"../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      },
      {
        membername:"Koushik Sarkar",
        memberimage:"../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      },
      {
        membername:"Koushik Sarkar",
        memberimage:"../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      },
      {
        membername:"Koushik Sarkar",
        memberimage:"../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      },
      {
        membername:"Koushik Sarkar",
        memberimage:"../assets/images/userimg/user1.jpg",
        memberlocation:"Kolkata"
      }
    ]
  }
  
}
