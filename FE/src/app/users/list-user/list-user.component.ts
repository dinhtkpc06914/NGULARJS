
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service'; 
import { IUsers } from '../../entities/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUsersComponent implements OnInit {
  users: IUsers[] = [];
  p: number = 1; // Current page number
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
  confirmDelete(id: string) {
    if (confirm('Bạn có chắc xóa không?')) {
      this.deleteuser(id);
    }
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
