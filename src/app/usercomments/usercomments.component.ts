import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

interface Comment{
  username:string;
  userImage: string;  
  userId: string;         
  userComments: string;
}

@Component({
  selector: 'app-usercomments',
  standalone: true,
  imports: [RouterModule,MatCardModule],
  templateUrl: './usercomments.component.html',
  styleUrl: './usercomments.component.scss'
})
export class UsercommentsComponent {

  comments: Comment[] = [];

  ngOnInit() {
    // Initialize with some example data
    this.comments = [
      {
        username:'Koushik Sarkar',
        userImage: '../assets/images/userimg/user1.jpg',
        userId: '123456',
        userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta, architecto adipisci ipsum molestias iusto blanditiis laborum sunt, quas obcaecati quaerat reiciendis. Nobis, reiciendis atque!'
      },
      {
        username:'Koushik Sarkar',
        userImage: '../assets/images/userimg/user1.jpg',
        userId: '789012',
        userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta, architecto adipisci ipsum molestias iusto blanditiis laborum sunt, quas obcaecati quaerat reiciendis. Nobis, reiciendis atque!'
      },
      {
        username:'Koushik Sarkar',
        userImage: '../assets/images/userimg/user1.jpg',
        userId: '345678',
        userComments: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta, architecto adipisci ipsum molestias iusto blanditiis laborum sunt, quas obcaecati quaerat reiciendis. Nobis, reiciendis atque!'
      }
    ];
  }
}
