import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';
import * as firebase from 'firebase/app';
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
  downloadURL: string;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  async uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files.length > 0) {
      const file = input.files[0];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`uploads/${file.name}`);
      fileRef.put(file).then((snapshot: any) => {
        fileRef.getDownloadURL().then((url: string) => {
          this.downloadURL = url;
          console.log(this.downloadURL);
        });
      });
    }
  }
  addUser() {
    this.userService.createUser({
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
      image: this.downloadURL,
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
