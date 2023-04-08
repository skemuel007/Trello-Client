import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error: string | null = null;

  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService) {}

  onSubmit(): void {
    console.log('submit', this.form.value);
    this.authService.register(this.form.value).subscribe(
      {
        next: (currentUser) => {
          this.authService.setToken(currentUser);
          this.authService.setCurrentUser(currentUser);
        },
        error: (err: HttpErrorResponse) => {
          console.log('err', err.error);
          this.error = err.error.join(', ');
        }
      }
    )
  }

}
