import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:FE/src/app/admin/form-task/form-task.component.ts
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { ITask } from '../entities/task';
=======

import { NgForm } from '@angular/forms'

import { TaskService } from '../../services/task.service';
import { ITask } from '../../entities/task';
>>>>>>> fc407e01d7ce516c00feef89691d6501fc3b8a65:FE/src/app/tasks/add-task/add-task.component.ts


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
<<<<<<< HEAD:FE/src/app/admin/form-task/form-task.component.ts
export class FormTaskComponent implements OnInit {
=======
export class AddTaskComponent implements OnInit {


>>>>>>> fc407e01d7ce516c00feef89691d6501fc3b8a65:FE/src/app/tasks/add-task/add-task.component.ts
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

  editingTask: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onSubmit() {
  }

  creattask(){
    this.taskService.createtask(this.task).subscribe(
      response => {
        console.log('Task added successfully', response);
        this.task = {
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
      error => {
        console.error('Error adding task', error);
      }
    );
  }

}
