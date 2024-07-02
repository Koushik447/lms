import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addmember',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './addmember.component.html',
  styleUrl: './addmember.component.scss'
})
export class AddmemberComponent {
  data={
    "name":'',
    
  }
  admember(){

  }
}
