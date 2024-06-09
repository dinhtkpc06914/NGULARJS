import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject } from '../entities/project'; // Đảm bảo đường dẫn đúng
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllprojects().subscribe(
      data => {
        console.log('Data received:', data); // Dòng debug
        this.projects = data;
      },
      error => console.error('Lỗi khi lấy dự án:', error)
    );
  }

  deleteProject(id: string) {
    if (confirm("Bạn có chắc chắn muốn xóa dự án này không?")) {
      this.projectService.deleteproject(id).subscribe(
        () => {
          console.log('Dự án đã được xóa thành công.'); // Đăng nhập khi xóa thành công
          // Sau khi xóa, cập nhật danh sách dự án
          this.getAllProjects();
        },
        error => console.error('Lỗi khi xóa dự án:', error)
      );
    }
    
  }

  viewProjectDetail(id: string) {
    this.router.navigate(['/project', id]);
  }
}
