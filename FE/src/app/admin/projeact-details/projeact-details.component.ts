import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IProject } from '../../../model/project.interface';

@Component({
  selector: 'app-projeact-details',
  templateUrl: './projeact-details.component.html',
  styleUrls: ['./projeact-details.component.css']
})
export class ProjeactDetailsComponent implements OnInit {
  projects: IProject[] = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesign the corporate website to improve UX and accessibility.',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-04-15'),
      teamMembers: 'Bộ 3 Hủy Diệt',
      status: 0 
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Develop a mobile application for e-commerce platform.',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-09-01'),
      teamMembers: 'Hehehe',
      status: 1 
    },
    {
      id: 3,
      name: 'Cloud Migration',
      description: 'Migrate all services and databases to the cloud.',
      startDate: new Date('2024-03-01'),
      teamMembers: 'Ko Biet=)))))))',
      status: 2 
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      description: 'Launch a new marketing campaign for the upcoming product.',
      startDate: new Date('2024-04-01'),
      endDate: new Date('2024-05-15'),
      teamMembers: 'Noooooooo',
      status: 3 
    }
  ];

  project: IProject | undefined;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const projectId = +this.route.snapshot.params['id'];
    this.project = this.projects.find(p => p.id === projectId);

    console.log("Query Param: ", this.route.snapshot.queryParamMap);
    console.log("Param ID: " + projectId);
  }

  onBack(): void {
    this.location.back();
  }
  getStatusText(status: number): string {
    switch(status) {
      case 0: return 'Chưa bắt đầu';
      case 1: return 'Đang tiến hành';
      case 2: return 'Hoàn thành';
      case 3: return 'Tạm dừng';
      default: return 'Không xác định';
    }
  }
}
