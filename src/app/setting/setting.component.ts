import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  member: any = null;
  constructor(private service: ServicesService) {}
  ngOnInit(): void {
    const userid = sessionStorage.getItem('userId');
    this.service.getUserDetailById(userid).subscribe(
      (response: any) => {
        console.log(response);

        this.member = response;
      },
      (error) => console.error(error)
    );
  }
}
