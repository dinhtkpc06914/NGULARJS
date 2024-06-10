import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';
import { NgForm } from '@angular/forms' 
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  role: string;
  image: string;
  team: string;
  created_at: string;
  updated_at: string;
  errorMessage: string;

  constructor(private userService: UsersService, private router: Router) { }


  ngOnInit() {
  }

  addUser() {
    this.userService.addUser({
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
      image: this.image,
      team: this.team,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }).subscribe(
      res => {
        this.router.navigate(['/list-user']);
      },
      err => {
        this.errorMessage = 'Có lỗi xảy ra khi thêm khách hàng';
      }
    );
  }

  formValid() {
    return this.username && this.password && this.email && this.role && this.image && this.team;
  }
}