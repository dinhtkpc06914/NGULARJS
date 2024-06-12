import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { UsersService } from '../../services/user.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  name: string;
  description: string;
  leader_id: string;
  team: string;
  start_date: string;
  end_date: string;
  budget: number;
  status: string;
  errorMessage: string;

  error;
  users;
  isLoading = false;
  projects;
  constructor(
    private projectService: ProjectService, 
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.fetchAllUsers()
   }

  addProject() {
    this.projectService.addProject({
      name: this.name,
      description: this.description,
      leader_id: this.leader_id,
      team: this.team,
      start_date: this.start_date,
      end_date: this.end_date,
      budget: this.budget,
      status: this.status,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }).subscribe(
      res => {
        this.router.navigate(['/list-project']);
      },
      err => {
        this.errorMessage = 'Có lỗi xảy ra khi thêm dự án';
      }
    );
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

}
