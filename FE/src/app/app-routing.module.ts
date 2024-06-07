import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { TabPanelComponent } from './admin/tab-panel/tab-panel.component';
import { usersComponent } from './admin/users/user.component';
import { ChartComponent } from './admin/chart/chart.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { TaskComponent } from './admin/task/task.component';
import { FormComponent } from './admin/form/form.component';
import { BlankComponent } from './admin/blank/blank.component';
import { ProjectDetailsComponent } from './admin/project-detail/project-detail.component';
import { FormTaskComponent } from './admin/form-task/form-task.component';
import { FormUserComponent } from './admin/form-user/form-user.component';
import { AuthGuard } from './admin/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Áp dụng AuthGuard cho đường dẫn mặc định
  { path: 'user', component: usersComponent },
  { path: 'tab-panel', component: TabPanelComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'task', component: TaskComponent },
  { path: 'form-task', component: FormTaskComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-task', component: FormTaskComponent },
  { path: 'form-user', component: FormUserComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Loại bỏ đường dẫn mặc định, vì nó đã được thêm ở trên
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
