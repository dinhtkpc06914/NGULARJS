
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { IUsers } from '../entities/user';// Đảm bảo đường dẫn đúng
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class usersComponent implements OnInit {
  users: IUsers[] = [];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.getAllProject();
  }

  getAllProject() {
    this.userService.getAllusers().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.users = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }

  viewUserDetail(id: string) {
    this.router.navigate(['/project', id]);
  }
  
}
