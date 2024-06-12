import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: any[] = [];
  p: number = 1; // Current page number
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProject().subscribe((projects: any[]) => {
      // Lặp qua mỗi dự án và gọi phương thức để lấy tên người quản lý
      for (const project of projects) {
        this.projectService.getUserNameById(project.leader_id).subscribe((userData: any) => {
          project.leader_name = userData.username; // Gán tên người quản lý vào thuộc tính leader_name của dự án
        });
      }
      this.projects = projects;
    });
  }

  deleteProject(id: string): void {
    this.projectService.deleteproject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}
