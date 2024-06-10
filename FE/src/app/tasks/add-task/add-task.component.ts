import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    project_id: string;
    name: string;
    description: string;
    assignee_id: string;
    status: string;
    priority: string;
    start_date: string;
    due_date: string;
    errorMessage: string;


  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {}
  createtask() {
    this.taskService.createtask({
      project_id: this.project_id,
      name: this.name,
      description: this.description,
      assignee_id: this.assignee_id,
      status: this.status,
      priority: this.priority,
      start_date: new Date().toISOString(),
      due_date: new Date().toISOString()
    }).subscribe(
      res => {
        this.router.navigate(['/list-task']); // Điều hướng đến trang tasks sau khi tạo task thành công
      },
      err => {
        this.errorMessage = 'Không thể tạo công việc, vui lòng thử lại'; // Thông báo lỗi
      }
    );
  }
  

}
