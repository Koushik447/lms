import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule,NavComponent,BooksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  profilePictureUrl: string = 'assets/images/userimg/user.png';
  dropdownVisible: boolean = false;
  isLoggedIn: boolean = false;
  searchQuery: string = '';
  searchResults: any[] = [];


  ngOnInit(): void {
    // Fetch user data
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.isLoggedIn = true;
      this.fetchProfilePicture(parsedUser.id);
    }
  }

  fetchProfilePicture(userId: string): void {
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.profilePictureUrl = data.profilePictureUrl;
      })
      .catch(error => {
        console.error('Error fetching profile picture:', error);
      });
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-container')) {
      this.dropdownVisible = false;
    }
  }


  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    window.location.href = '/signup'; 
  }
}
