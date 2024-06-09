import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TaskService } from '../../services/task.service';
import { ITask } from '../../entities/task';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
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
