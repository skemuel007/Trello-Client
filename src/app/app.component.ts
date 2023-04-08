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
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.authService.setCurrentUser(null);
      }
    });
  }
  title = 'eltrello-client';
}
