import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service'; 

import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProjectDetail(id);
  }

  getProjectDetail(id: string) {
    this.projectService.getProjectById(id).subscribe(
      data => {
        this.project = data;
      },
      error => console.error('Lỗi khi lấy chi tiết dự án:', error)
    );
  }
  
  onBack(): void {
    this.location.back();
  }
}
