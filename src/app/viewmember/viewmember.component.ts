import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewmember',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatCardModule,CommonModule],
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.scss']
})
export class ViewmemberComponent {
  members: any[] = []; 

  constructor(private service: ServicesService) {}

  ngOnInit() {
    this.service.getUser().subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.members = response; 
        } else if (response.users && Array.isArray(response.users)) {
          this.members = response.users;
        } else {
          console.error('Unexpected response format:', response);
        }
        console.log(this.members);
      },
      (error) => console.error(error)
    );
  }
  trackByFn(index: number, item: any): string {
        return item._id; 
      }

      memberid(id:any){
        sessionStorage.setItem('userId',id)
        console.log(id)
      }
}

