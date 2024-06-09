import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  role: string;
  email: string;
  image: string = '0';
  password: string;
  team: string = 'TeamA';
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }
  register() {
    this.authService.register({
      username: this.username,
      role: this.role,
      email: this.email,
      image: this.image,
      password: this.password,
      team: this.team
    }).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage = 'tên đăng nhập hoặc email đã sử dụng';
      }
    );
  }
}
