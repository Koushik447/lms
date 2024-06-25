import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { LibmanagerComponent } from './libmanager/libmanager.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { MemberprofileComponent } from './memberprofile/memberprofile.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,SignupComponent,FooterComponent,LibmanagerComponent,AddmemberComponent,AllbooksComponent,MemberprofileComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lms';
}
