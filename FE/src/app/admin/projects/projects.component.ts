import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject } from '../entities/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  p: number = 1; // Current page number
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllprojects().subscribe((projects: IProject[]) => {
      this.projects = projects;
    });
  }

  deleteProject(id: string): void {
    this.projectService.deleteproject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}
