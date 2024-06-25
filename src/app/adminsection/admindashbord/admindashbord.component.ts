import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { LeftsidebarComponent } from '../leftsidebar/leftsidebar.component';
import { RightcardsectionComponent } from '../rightcardsection/rightcardsection.component';

@Component({
  selector: 'app-admindashbord',
  standalone: true,
  imports: [RouterModule,SearchbarComponent,LeftsidebarComponent,RightcardsectionComponent],
  templateUrl: './admindashbord.component.html',
  styleUrl: './admindashbord.component.scss'
})
export class AdmindashbordComponent {

}
