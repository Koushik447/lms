import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface Book {
  author: string;
  bookname: string;
  image: string;
  description: string;
  id: string;
  rating: number;
  price: string;
}

interface Member {
  name: string;
  images: string;
  email: string;
  phone: string;
  memberId: string;
  joinDate: Date;
  membershipStatus: boolean;
  feedback: string;
  alreadyReadBooks: Book[];
  currentlyReadingBooks: Book[];
  membershipPlan: '3 months' | '6 months' | '12 months';
  membershipEndDate: Date;
}

@Component({
  selector: 'app-memberprofile',
  standalone: true,
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,CommonModule
  ],
  templateUrl: './memberprofile.component.html',
  styleUrl: './memberprofile.component.scss'
})
export class MemberprofileComponent {
  members: Member[] = [];

  ngOnInit() {
    this.members = [
      {
        name: 'John Doe',
        images: '../assets/images/userimg/user1.jpg',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        memberId: '123456',
        joinDate: new Date('2023-01-01'),
        membershipStatus: true,
        feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam, quae, commodi quos magni eligendi, nobis cumque mollitia nulla eaque ducimus ipsum inventore rem reprehenderit in vero quam nemo a dolorum error. Facere eos totam exercitationem, doloribus harum ad quod voluptate porro? Error eius eveniet quam quas sit ea voluptate perferendis, totam hic nulla dolore, voluptatem incidunt beatae omnis nam suscipit sapiente alias eaque maxime ipsam, repellat iusto cumque voluptates temporibus. Dicta ad qui possimus dignissimos placeat molestias labore quisquam hic dolorum inventore modi reprehenderit accusamus assumenda sed voluptatibus obcaecati in, error, nisi similique? Mollitia corrupti accusamus at consequatur dignissimos!',
        alreadyReadBooks: [
          { author: 'Harper Lee', bookname: 'To Kill a Mockingbird', image: '../assets/images/tokillamocking.jpg', description: 'A novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States.', id: '001', rating: 5, price: '₹1120' },
          { author: 'Herman Melville', bookname: 'Moby-Dick', image: '../assets/images/mobydick.jpg', description: 'A novel by Herman Melville, in which Captain Ahab seeks vengeance against a white whale named Moby-Dick.', id: '003', rating: 3, price: '₹1120' }
        ],
        currentlyReadingBooks: [
          { author: 'Jane Austen', bookname: 'Pride and Prejudice', image: '../assets/images/prideandpreju.jpg', description: 'A romantic novel by Jane Austen, following the character development of Elizabeth Bennet.', id: '004', rating: 5, price: '₹1120' }
        ],
        membershipPlan: '6 months',
        membershipEndDate: this.calculateMembershipEndDate(new Date('2023-01-01'), '6 months')
      }
    ];
  }

  calculateMembershipEndDate(joinDate: Date, plan: '3 months' | '6 months' | '12 months'): Date {
    const endDate = new Date(joinDate);
    switch (plan) {
      case '3 months':
        endDate.setMonth(endDate.getMonth() + 3);
        break;
      case '6 months':
        endDate.setMonth(endDate.getMonth() + 6);
        break;
      case '12 months':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
    }
    return endDate;
  }

  trackByMemberId(index: number, member: Member): string {
    return member.memberId;
  }
}
