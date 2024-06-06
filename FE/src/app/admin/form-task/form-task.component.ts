import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms'

import { TaskService } from '../services/task.service';
import { ITask } from '../entities/task';


@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {


  task: ITask = {
    project_id: '',
    name: '',
    description: '',
    assignee_id: '',
    status: '',
    priority: '',
    start_date: '',
    due_date: ''
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onSubmit() {
    this.taskService.createtask(this.task).subscribe(
      response => {
        console.log('Task added successfully', response);
        // Thêm hành động cần thiết sau khi thêm task thành công, như điều hướng hoặc hiển thị thông báo
      },
      error => {
        console.error('Error adding task', error);
        // Thêm xử lý lỗi nếu cần
      }
    );
  }

}
