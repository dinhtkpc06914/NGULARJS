import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any[] = []; // Sử dụng any[] thay vì Object
  p: number = 1; // Current page number
  constructor(private userService: UsersService, private router: Router) { }
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (data: any[]) => { 
        console.log('Data received:', data);
        this.users = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }

  confirmDelete(id: string) {
    if (confirm('Bạn có chắc xóa không?')) {
      this.deleteUser(id);
    }
  }

  deleteUser(id: string) {
    this.userService.deleteuser(id).subscribe(
      () => {
        console.log('User deleted successfully');
        // Refresh the user list
        this.getAllUsers();
      },
      error => console.error('Error deleting user:', error)
    );
  }
}
