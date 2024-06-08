import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ITask } from '../entities/task'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];
  newTask: ITask = {
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
    this.taskService.getAlltasks().subscribe(
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
      this.taskService.deletetask(id).subscribe(
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

  createtask() {
    this.taskService.createtask(this.newTask).subscribe(
      () => {
        console.log('Task created successfully');
        this.getAlltasks();
        this.newTask = {
          project_id: '',
          name: '',
          description: '',
          assignee_id: '',
          status: '',
          priority: '',
          start_date: '',
          due_date: ''
        };
      },
      error => console.error('Error creating task:', error)
    );
  }
}
