import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManagerdetailsComponent } from '../managerdetails/managerdetails.component';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-librarymanagerlist',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule, MatMenuTrigger, MatMenuModule, CommonModule, ManagerdetailsComponent],
  templateUrl: './librarymanagerlist.component.html',
  styleUrls: ['./librarymanagerlist.component.scss']
})
export class LibrarymanagerlistComponent implements OnInit {
  managers: any[] = [];

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit() {
    this.service.libraryManager().subscribe(
      (response: any) => {
        this.managers = response;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
