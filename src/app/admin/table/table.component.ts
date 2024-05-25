import { Component, OnInit } from '@angular/core';
import { IProject } from '../../../model/project.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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
  listProject: IProject[] = [];
  
  constructor() { }
  

  ngOnInit() {
    this.listProject = this.projects;
  }

  getStatusText(status: number): string {
    switch (status) {
      case 0:
        return 'Chưa xác nhận';
      case 1:
        return 'Đang thực hiện';
      case 2:
        return 'Đã hủy';
      case 3:
        return 'Đã hoàn thành';
      default:
        return 'Không rõ';
    }
  }
  
  
}
