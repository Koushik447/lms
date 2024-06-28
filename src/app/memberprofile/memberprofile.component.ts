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
  members: any[] = [];

  constructor(private service: ServicesService) {}

  ngOnInit() {
    const userid = sessionStorage.getItem('userId');
    this.service.getUserDetailById(userid).subscribe(
      (response: any) => {
        console.log(response);
        // Ensure response is an array
        if (Array.isArray(response)) {
          this.members = response;
        } else {
          // If the response is an object, wrap it in an array
          this.members = [response];
        }
      },
      (error) => console.error(error)
    );
  }

  trackByMemberId(index: number, member: any): string {
    return member._id;
  }
}
