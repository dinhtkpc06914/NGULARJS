import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { BlankComponent } from './blank/blank.component';
import { AuthGuard } from './auth/auth.guard';
import { TaskRoutingModule } from './tasks/task-routing.module';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Áp dụng AuthGuard cho đường dẫn mặc định
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
