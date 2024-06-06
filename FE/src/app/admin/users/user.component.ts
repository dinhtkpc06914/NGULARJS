
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
    this.getAllusers();
  }

  getAllusers() {
    this.userService.getAllusers().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.users = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }
  viewUserDetail(id: string) {
    this.router.navigate(['/user', id]);
  }

  deleteuser(id: string) {
    this.userService.deleteuser(id).subscribe(
      () => {
        console.log('Task deleted successfully');
        // Refresh the task list
        this.getAllusers();
      },
      error => console.error('Error deleting task:', error)
    );
  }
}
