import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      res => {
        this.router.navigate(['']);
      },
      err => {
        this.errorMessage = 'Tài Khoản hoặc mật khẩu không đúng';
      }
    );
  }
}
