import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})


export class ListTaskComponent implements OnInit {
  tasks: any[] = [];
  p: number = 1;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAlltasks().subscribe(
      (data: any[]) => {
        console.log('Data received:', data);
        this.tasks = data;
        this.loadAssigneeNamesAndProjectNames(); // Gọi phương thức để lấy tên người được giao việc và tên dự án
      },
      error => console.error('Lỗi khi lấy công việc:', error)
    );
  }


  loadAssigneeNamesAndProjectNames() {
    for (const task of this.tasks) {
      this.taskService.getUserNameById(task.assignee_id).subscribe((userData: any) => {
        task.assignee_name = userData.username; // Gán tên người được giao việc
      });

      this.taskService.getProjectNameById(task.project_id).subscribe((projectData: any) => {
        task.project_name = projectData.name; // Gán tên dự án
      });
    }
  }

  deletetask(id: string) {
    console.log('Deleting post with ID:', id);
    if (id) {
      this.taskService.deletetask(id).subscribe(
        () => {
          this.getAllTasks();
          alert('Xóa thành công!');
        },
        error => {
          console.error('Lỗi khi xoá Task:', error);
        }
      );
    } else {
      console.warn('ID Task không hợp lệ!');
    }
  }

  confirmDelete(id: string) {
    if (confirm('Bạn có chắc xóa không?')) {
      this.deletetask(id);
    }
  }


  
}
