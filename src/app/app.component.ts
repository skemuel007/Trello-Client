import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getCurrenctUser()
    .subscribe({
      next: (currentUser) => {
        this.authService.setCurrentUser(currentUser);
      },
      error: (err) => {
        console.log(err);
        this.authService.setCurrentUser(null);
      }
    });

    this.authService.currentUser$.subscribe(
      res => {
        console.log('res', res);
      }
    );

    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      console.log('isLoggedIn');
    });
  }
  title = 'eltrello-client';
}
