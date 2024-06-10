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

  updateTask() {
    this.taskService.updateTask(this.taskId, {
      project_id: this.project_id,
      name: this.name,
      description: this.description,
      assignee_id: this.assignee_id,
      status: this.status,
      priority: this.priority,
      start_date: this.start_date,
      due_date: this.due_date
    }).subscribe(
      res => {
        this.router.navigate(['/list-task']); // Điều hướng đến trang tasks sau khi cập nhật task thành công
      },
      err => {
        this.errorMessage = 'Không thể cập nhật công việc, vui lòng thử lại'; // Thông báo lỗi
      }
    );
  }
}
