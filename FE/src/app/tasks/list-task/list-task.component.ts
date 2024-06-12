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
<<<<<<< HEAD
=======
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

>>>>>>> cd11c0aa976816c23e0aa4990b4c6b42bc93fca6
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.getAllTasks();
  }
  
<<<<<<< HEAD
  getAllTasks() {
    this.taskService.getAlltasks().subscribe(
      (data: any[]) => {
=======
  getAlltasks() {
    this.taskService.getAllTasks().subscribe(
      data => {
>>>>>>> cd11c0aa976816c23e0aa4990b4c6b42bc93fca6
        console.log('Data received:', data);
        this.tasks = data;
      },
      error => console.error('Lỗi khi lấy công việc:', error)
    );
  }
  

  deletetask(id: string) {
    console.log('Deleting post with ID:', id);
    if (id) {
      this.taskService.deleteTask(id).subscribe(
        () => {
          this.getAllTasks();
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
