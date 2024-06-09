import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectRoutingModule } from './project-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    ProjectRoutingModule
  ],
  declarations: [
    AddProjectComponent,
    ProjectDetailComponent,
    ListProjectComponent
  ],
  exports: [
    AddProjectComponent,
    ProjectDetailComponent,
    ListProjectComponent
  ]
})
export class ProjectModule { }
