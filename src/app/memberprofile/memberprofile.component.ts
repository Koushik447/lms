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
import { ServicesService } from '../../services/services.service';

interface Member {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  profile_url: string;
  register_date: string;
  active_books: any[];
  reading_book_history: any[];
  membership: {
    type: string;
    duration_in_months: number;
    price: number;
    Activation_date: string;
    End_Date: string;
  };
  membershipStatus?: boolean; 
  feedback?: string;
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
    MatCardModule,
    CommonModule
  ],
  templateUrl: './memberprofile.component.html',
  styleUrls: ['./memberprofile.component.scss']
})
export class MemberprofileComponent {
  members: Member[] = [];

  constructor(private service: ServicesService) {}

  ngOnInit() {
    const userId = sessionStorage.getItem('userId');
    
    this.service.getUserDetailById(userId).subscribe(
      (response: any) => {
        console.log(response)
        if (Array.isArray(response)) {
          this.members = response;
        } else {
          this.members = [response];
        }
        this.members.forEach(member => {
          member.membershipStatus = this.isMembershipActive(member);
        });
      },
      (error) => console.error(error)
    );
  }

  trackByMemberId(index: number, member: Member): string {
    return member._id;
  }

  isMembershipActive(member: Member): boolean {
    if (member.membership && member.membership.End_Date) {
      const currentDate = new Date();
      const endDate = new Date(member.membership.End_Date);
      return endDate >= currentDate;
    }
    return false;
  }
}
