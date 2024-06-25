import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MembershipplanComponent } from '../membershipplan/membershipplan.component';

@Component({
  selector: 'app-userlandingpage',
  standalone: true,
  imports: [RouterModule,NavComponent,MatButtonModule,MatSidenavModule,MembershipplanComponent],
  templateUrl: './userlandingpage.component.html',
  styleUrl: './userlandingpage.component.scss'
})
export class UserlandingpageComponent {
  showFiller = false;
  
}
