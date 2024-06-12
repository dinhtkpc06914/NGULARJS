import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
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
  downloadURL: string;

  constructor(private authService: AuthService, private router: Router) { }
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
  register() {
    this.authService.register({
      username: this.username,
      role: this.role,
      email: this.email,
      image: this.downloadURL,
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
