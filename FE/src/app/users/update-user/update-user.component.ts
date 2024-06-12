import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/user.service';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: string;
  username: string = '';
  email: string = '';
  role: string = '';
  image: string = '';
  team: string = '';
  created_at: string = '';
  updated_at: string = '';
  errorMessage: string = '';
  downloadURL: string;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userService.getUserById(this.id).subscribe(
        user => {
          this.username = user.username;
          this.email = user.email;
          this.role = user.role;
          this.image = user.image;
          this.team = user.team;
          this.created_at = new Date(user.created_at).toISOString().split('T')[0]; // Chuyển đổi định dạng ngày
          this.updated_at = new Date(user.updated_at).toISOString().split('T')[0]; // Chuyển đổi định dạng ngày
        },
        err => {
          this.errorMessage = 'Có lỗi xảy ra khi tải user';
        }
      );
    });
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
  updateUser() {
    // Ensure the budget is a number before updating the project
    this.userService.updateUser({
      id: this.id,
      username: this.username,
      email: this.email,
      role: this.role,
      image: this.downloadURL,
      team: this.team,
      created_at: this.created_at,
      updated_at: this.updated_at

    }).subscribe(
      res => {
        this.router.navigate(['/list-user']);
      },
      err => {
        this.errorMessage = 'Có lỗi xảy ra khi cập nhật dự án';
      }
    );
  }

  formValid() {
    return this.username  && this.email && this.role && this.image && this.team && this.created_at && this.updated_at;
  }
}

