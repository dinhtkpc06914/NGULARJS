import { Component, OnInit } from '@angular/core';
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

  editingTask: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onSubmit() {
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
