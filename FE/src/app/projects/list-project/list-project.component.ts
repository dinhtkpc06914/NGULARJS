import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../entities/project';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: IProject[] = [];
  p: number = 1; // Current page number
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProject().subscribe((projects: IProject[]) => {
      this.projects = projects;
    });
  }

  deleteProject(id: string): void {
    this.projectService.deleteproject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}
