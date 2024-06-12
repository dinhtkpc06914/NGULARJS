import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { AuthGuard } from '../auth/auth.guard';
import { PagenotfundComponent } from '../pagenotfund/pagenotfund.component';
const ProjectRoutes: Routes = [
  { path: 'add-project', component: AddProjectComponent,canActivate: [AuthGuard], data: { expectedRoles: ['leader'] } },
 { path: 'project/:id', component: ProjectDetailComponent },
 { path: 'projects/:id', component: UpdateProjectComponent,canActivate: [AuthGuard], data: { expectedRoles: ['leader'] } },
 { path: 'list-project', component: ListProjectComponent },
 { path: '404', component: PagenotfundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(ProjectRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
