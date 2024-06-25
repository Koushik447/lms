import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-libmanager',
  standalone: true,
  imports: [RouterModule,NavComponent],
  templateUrl: './libmanager.component.html',
  styleUrl: './libmanager.component.scss'
})
export class LibmanagerComponent {

}
