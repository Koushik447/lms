
// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { MembershipplanComponent } from '../membershipplan/membershipplan.component';
// import { CommonModule } from '@angular/common';
// import { ServicesService } from '../../services/services.service';
// import { MatCardModule } from '@angular/material/card';

// @Component({
//   selector: 'app-buymembership',
//   standalone: true,
//   imports: [RouterModule, MembershipplanComponent, CommonModule,MatCardModule],
//   templateUrl: './buymembership.component.html',
//   styleUrls: ['./buymembership.component.scss']
// })
// export class BuymembershipComponent {
//   member: any = null;
//   constructor(private service: ServicesService) {}

//   data: any = {
//     "_id": '',
//     "type": '',
//     "price": '',
//     "duration_in_months": '',
//     "benefits": '',
//     "user_id":''
//   }

//   ngOnInit(): void {
//     this.service.memberShipPlan().subscribe(
//       (response: any) => {
//         this.data = response;
//         response.memberships.forEach((membership: any) => {
//         });
//       },
//       (error) => console.error(error)
//     );
//     const userid = sessionStorage.getItem('userId');
//     this.service.getUserDetailById(userid).subscribe(
//       (response: any) => {
//         console.log(response);

//         this.member = response;
//       },
//       (error) => console.error(error)
//     );
//   }

//   membershipData = {
//     'user_id':'',
//     'membership_id':''
//   }

//   selectmembership(membershipId: any): void {
//     const userid:any = sessionStorage.getItem('userId');
//     const membershipid=membershipId;
//     this.membershipData.membership_id = membershipid
//     this.membershipData.user_id = userid
//     console.log(this.membershipData)
//     this.service.buyMembership(this.membershipData).subscribe(
//           (response: any) => {
//             alert(response.message)
//           },
//           (error: any) => {
//             alert(error.error.error)
//           }
//         );

//   }
// }


import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MembershipplanComponent } from '../membershipplan/membershipplan.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services/services.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-buymembership',
  standalone: true,
  imports: [RouterModule, MembershipplanComponent, CommonModule, MatCardModule],
  templateUrl: './buymembership.component.html',
  styleUrls: ['./buymembership.component.scss']
})
export class BuymembershipComponent implements OnInit { // Added OnInit interface
  member: any = null;
  data: any = {
    "_id": '',
    "type": '',
    "price": '',
    "duration_in_months": '',
    "benefits": '',
    "user_id": ''
  };

  membershipData = {
    'user_id': '',
    'membership_id': ''
  };

  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.service.memberShipPlan().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error) => console.error(error)
    );
    const userid = sessionStorage.getItem('userId');
    this.service.getUserDetailById(userid).subscribe(
      (response: any) => {
        console.log(response);
        this.member = response;
      },
      (error) => console.error(error)
    );
  }

  selectmembership(membershipId: any): void {
    const userid: any = sessionStorage.getItem('userId');
    this.membershipData.membership_id = membershipId;
    this.membershipData.user_id = userid;
    console.log(this.membershipData);
    this.service.buyMembership(this.membershipData).subscribe(
      (response: any) => {
        alert(response.message);
      },
      (error: any) => {
        alert(error.error.error);
      }
    );
  }
}
