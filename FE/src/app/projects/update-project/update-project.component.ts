import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  id: string;
  name: string = '';
  description: string = '';
  leader_id: string = '';
  team: string = '';
  start_date: string = '';
  end_date: string = '';
  budget: number = 0;
  status: string = '';
  errorMessage: string = '';

  constructor(
    private projectService: ProjectService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.projectService.getProjectById(this.id).subscribe(
        project => {
          this.name = project.name;
          this.description = project.description;
          this.leader_id = project.leader_id;
          this.team = project.team;
          this.start_date = new Date(project.start_date).toISOString().split('T')[0]; // Chuyển đổi định dạng ngày
          this.end_date = new Date(project.end_date).toISOString().split('T')[0]; // Chuyển đổi định dạng ngày
          this.budget = parseFloat(project.budget);
          this.status = project.status;
        },
        err => {
          this.errorMessage = 'Có lỗi xảy ra khi tải dự án';
        }
      );
    });
  }

  updateProject() {
    // Ensure the budget is a number before updating the project
    const parsedBudget = parseFloat(this.budget.toString());
    this.projectService.updateProject({
      id: this.id,
      name: this.name,
      description: this.description,
      leader_id: this.leader_id,
      team: this.team,
      start_date: this.start_date,
      end_date: this.end_date,
      budget: parsedBudget,
      status: this.status,
    }).subscribe(
      res => {
        this.router.navigate(['/list-project']);
      },
      err => {
        this.errorMessage = 'Có lỗi xảy ra khi cập nhật dự án';
      }
    );
  }

  formValid() {
    return this.name && this.description && this.leader_id && this.team && this.start_date && this.end_date && this.budget !== null && this.status;
  }
}
