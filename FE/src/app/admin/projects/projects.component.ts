import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { IProject } from '../entities/project'; // Đảm bảo đường dẫn đúng

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class projectsComponent implements OnInit {
  posts: IProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getAllProject();
  }

  getAllProject() {
    this.projectService.getAllprojects().subscribe(
      data => {
        console.log('Data received:', data); // Debugging line
        this.posts = data;
      },
      error => console.error('Lỗi khi lấy bài viết:', error)
    );
  }

  // getStatusText(status: number): string {
  //   switch (status) {
  //     case 0:
  //       return 'Chưa xác nhận';
  //     case 1:
  //       return 'Đang thực hiện';
  //     case 2:
  //       return 'Đã hủy';
  //     case 3:
  //       return 'Đã hoàn thành';
  //     default:
  //       return 'Không rõ';
  //   }
  // }
  
  
}
