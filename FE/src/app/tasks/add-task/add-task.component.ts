import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { UsersService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  error;
  users;
  isLoading = false;
  tasks;
  projects;
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
     private userService: UsersService,
     private projectService: ProjectService,
    ) {}
    ngOnInit() {
      this.fetchAllUsers();
      this.getAllProject();
      }
      fetchAllUsers() {
        this.isLoading = true;
        this.userService.getAllUsers().subscribe(data => {
          this.isLoading = false;
          this.users = data;
          // console.log(this.users);
        },
          error => {
            if (error.status == '404') {
              this.error = "Loi khong tim thay";
            }
            else {
              console.log(error);
              this.error = "Loi server " + error.message;
            }
          }
        );
      }
    //lấy tất cả project 
    getAllProject() {
      this.isLoading = true;
      this.projectService.getAllProject().subscribe(
        (data) => {
          this.isLoading = false;
          this.projects = data;
          // console.log(this.projects);
        },
        (error) => {
          if (error.status == "404") {
            this.error = "Loi khong tim thay";
          } else {
            console.log(error);
            this.error = "Loi server " + error.message;
          }
        }
      );
    }
    
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
      start_date: this.start_date || new Date().toISOString(), 
      due_date: this.due_date || new Date().toISOString()
    }).subscribe(
      res => {
        this.router.navigate(['/list-task']); 
      },
      err => {
        console.error('Error creating task:', err); 
        this.errorMessage = 'Có lỗi xảy ra khi tạo công việc'; 
      }
    );
  }
}
