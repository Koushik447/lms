import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManagerdetailsComponent } from '../managerdetails/managerdetails.component';

interface Viewmember {
  name: string;
  memberimage: string;
  email: string;
  mobile: string;
  lib_name: string;
  id: string;
}

@Component({
  selector: 'app-librarymanagerlist',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule, MatMenuModule,CommonModule,ManagerdetailsComponent],
  templateUrl: './librarymanagerlist.component.html',
  styleUrls: ['./librarymanagerlist.component.scss']
})
export class LibrarymanagerlistComponent {
  members: Viewmember[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.members = [
      {
        name: "Koushik Sarkar",
        memberimage: "../assets/images/userimg/user1.jpg",
        email: "koushik@gmail.com",
        mobile: "98765432123",
        lib_name: "Koushik Library",
        id: "101"
      }
    ];
  }

  trackByMemberId(index: number, member: Viewmember): string {
    return member.id;
  }

  renameMember(member: Viewmember) {
    this.router.navigate(['/rename', member.id]);
  }

  deleteMember(memberId: string) {
    const confirmed = confirm('Are you sure you want to delete this member?');
    if (confirmed) {
      this.members = this.members.filter(member => member.id !== memberId);
    }
  }
}
