import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LibmanagerComponent } from './libmanager/libmanager.component';

export const routes: Routes = [
    {
        path:"signup",
        loadComponent: ()=> import("./signup/signup.component").then(m => m.SignupComponent)
        
    },
    // {path:'', component:LibmanagerComponent}
    {
        path:'',
        loadComponent: ()=> import("./userlandingpage/userlandingpage.component").then(m => m.UserlandingpageComponent)
        
    },
    {
        path:"librarymanager",
        loadComponent: ()=> import("./libmanager/libmanager.component").then(m => m.LibmanagerComponent)
    },
    {
        path:"allbooks",
        loadComponent: ()=> import("./allbooks/allbooks.component").then(m => m.AllbooksComponent)
    },
    {
        path:"addbook",
        loadComponent: ()=> import("./addbook/addbook.component").then(m => m.AddbookComponent)
    }
    ,
    {
        path:"addmember",
        loadComponent: ()=> import("./addmember/addmember.component").then(m => m.AddmemberComponent)
    },
    {
        path:"viewmember",
        loadComponent: ()=> import("./viewmember/viewmember.component").then(m => m.ViewmemberComponent)
    },
    {
        path:"memberprofile",
        loadComponent: ()=> import("./memberprofile/memberprofile.component").then(m => m.MemberprofileComponent)
    }
    ,
    {
        path:"createsection",
        loadComponent: ()=> import("./createsection/createsection.component").then(m => m.CreatesectionComponent)
    }
    ,
    {
        path:"comments",
        loadComponent: ()=> import("./usercomments/usercomments.component").then(m => m.UsercommentsComponent)
    }
    ,
    {
        path:"membership",
        loadComponent: ()=> import("./membershipplan/membershipplan.component").then(m => m.MembershipplanComponent)
    }
    ,
    {
        path:"books",
        loadComponent: ()=> import("./books/books.component").then(m => m.BooksComponent)
    }
    ,
    {
        path:"user",
        loadComponent: ()=> import("./user/user.component").then(m => m.UserComponent)
    }
    ,
    {
        path:"userlandingbook",
        loadComponent: ()=> import("./userlandingbookpage/userlandingbookpage.component").then(m => m.UserlandingbookpageComponent)
    }
    ,
    {
        path:"setting",
        loadComponent: ()=> import("./setting/setting.component").then(m => m.SettingComponent)
    }
    ,
    {
        path:"userbook",
        loadComponent: ()=> import("./userbookcollection/userbookcollection.component").then(m => m.UserbookcollectionComponent)
    }
    ,
    {
        path:"addashbord",
        loadComponent: ()=> import("./adminsection/admindashbord/admindashbord.component").then(m => m.AdmindashbordComponent)
    }
    ,
    {
        path:"givefeedback",
        loadComponent: ()=> import("./givefeedback/givefeedback.component").then(m => m.GivefeedbackComponent)
    },
    {
        path:"librarymanagerlist",
        loadComponent: ()=> import("./adminsection/librarymanagerlist/librarymanagerlist.component").then(m => m.LibrarymanagerlistComponent)
    },
    {
        path:"addmanager",
        loadComponent: ()=> import("./adminsection/addmanager/addmanager.component").then(m => m.AddmanagerComponent)
    }
    ,
    {
        path:"managerdetails",
        loadComponent: ()=> import("./adminsection/managerdetails/managerdetails.component").then(m => m.ManagerdetailsComponent)
    }
    ,
    {
        path:"updatebook",
        loadComponent: ()=> import("./updatebook/updatebook.component").then(m => m.UpdatebookComponent)
    }
];
