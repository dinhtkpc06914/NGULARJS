import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id: string;
  project_id: string = '';
  name: string = '';
  description: string = '';
  assignee_id: string = '';
  status: string = '';
  priority: string = '';
  start_date: string = '';
  due_date: string = '';
  errorMessage: string = '';

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.taskService.getTaskById(this.id).subscribe(
        task => {
          this.project_id = task.project_id;
          this.name = task.name;
          this.description = task.description;
          this.assignee_id = task.assignee_id;
          this.status = task.status;
          this.priority = task.priority;
          this.start_date = new Date(task.start_date).toISOString().split('T')[0]; // Chuyển đổi định dạng ngày
          this.due_date = new Date(task.due_date).toISOString().split('T')[0]; // Chuyển đổi định dạng ngày
        },
        err => {
          this.errorMessage = 'Không thể lấy thông tin công việc, vui lòng thử lại';
        }
      );
    });
  }

  updateTask() {
    const taskData = {
      _id: this.id, // Ensure the _id property is used
      project_id: this.project_id,
      name: this.name,
      description: this.description,
      assignee_id: this.assignee_id,
      status: this.status,
      priority: this.priority,
      start_date: this.start_date,
      due_date: this.due_date
    };
    console.log('Task data before update:', taskData); // Log dữ liệu trước khi gửi

    this.taskService.updateTask(taskData).subscribe(
        res => {
            this.router.navigate(['/list-task']);
        },
        err => {
            console.error('Error updating task:', err); // Log chi tiết lỗi
            this.errorMessage = 'Có lỗi xảy ra khi cập nhật công việc';
        }
    );

}
  
}
