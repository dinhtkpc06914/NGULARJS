import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListtaskComponent implements OnInit {
  tasks: any[] = []; // Sử dụng kiểu any[] thay vì interface
  p: number = 1; // Current page number
  newTask: any = { // Sử dụng kiểu any thay vì interface
    project_id: '',
    name: '',
    description: '',
    assignee_id: '',
    status: '',
    priority: '',
    start_date: '',
    due_date: ''
  };

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.getAlltasks();
  }
  
  getAlltasks() {
    this.taskService.getAllTasks().subscribe(
      data => {
        console.log('Data received:', data);
        this.tasks = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }

  deletetask(id: string) {
    console.log('Deleting post with ID:', id);
    if (id) {
      this.taskService.deleteTask(id).subscribe(
        () => {
          this.getAlltasks();
          alert('Xóa thành công!');
        },
        error => {
          console.error('Lỗi khi xoá Task:', error);
        }
      );
    } else {
      console.warn('ID Task không hợp lệ!');
    }
  }

  confirmDelete(id: string) {
    if (confirm('Bạn có chắc xóa không?')) {
      this.deletetask(id);
    }
  }

  
}
