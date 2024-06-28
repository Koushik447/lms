import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membershipplan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membershipplan.component.html',
  styleUrl: './membershipplan.component.scss'
})
export class MembershipplanComponent implements OnInit {

  constructor(private service:ServicesService){}

  data:any={
    "_id":'',
    "type":'',
    "price":'',
    "duration_in_months":'',
    "benefits":''
  }
  ngOnInit(): void {
    this.service.memberShipPlan().subscribe(
      (reponse:any)=>{
        this.data=reponse;
        console.log(reponse)
      },
      (error)=> console.error(error)
    )
  }
}
