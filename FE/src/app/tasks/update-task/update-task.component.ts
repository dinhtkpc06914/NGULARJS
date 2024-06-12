import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  taskId: string;
  project_id: string;
  name: string;
  description: string;
  assignee_id: string;
  status: string;
  priority: string;
  start_date: string;
  due_date: string;
  errorMessage: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
  this.getTaskById();
  }

  getTaskById() {
    this.taskService.getTaskById(this.taskId).subscribe(
      task => {
        this.project_id = task.project_id;
        this.name = task.name;
        this.description = task.description;
        this.assignee_id = task.assignee_id;
        this.status = task.status;
        this.priority = task.priority;
        this.start_date = task.start_date;
        this.due_date = task.due_date;
      },
      err => {
        this.errorMessage = 'Không thể lấy thông tin công việc, vui lòng thử lại';
      }
    );
  }

  
}
