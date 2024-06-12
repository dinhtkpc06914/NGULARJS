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
    // Kiểm tra các trường bắt buộc
    if (!this.project_id || !this.name || !this.assignee_id || !this.status || !this.priority) {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin cho các trường bắt buộc.';
      return;
    }

    // Gửi yêu cầu tạo công việc
    this.taskService.createtask({
      project_id: this.project_id,
      name: this.name,
      description: this.description,
      assignee_id: this.assignee_id,
      status: this.status,
      priority: this.priority,
      start_date: this.start_date || new Date().toISOString(), // Sử dụng ngày hiện tại nếu không có ngày bắt đầu
      due_date: this.due_date || new Date().toISOString() // Sử dụng ngày hiện tại nếu không có ngày kết thúc
    }).subscribe(
      res => {
        this.router.navigate(['/list-task']); // Điều hướng đến trang tasks sau khi tạo task thành công
      },
      err => {
        console.error('Error creating task:', err); // Log lỗi để kiểm tra
        this.errorMessage = 'Có lỗi xảy ra khi tạo công việc'; // Thông báo lỗi
      }
    );
  }
}
