import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { usersComponent } from './users/user.component';
import { ChartComponent } from './chart/chart.component';
import { BlankComponent } from './blank/blank.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AuthGuard } from './auth/auth.guard';
import { TaskRoutingModule } from './tasks/task-routing.module';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Áp dụng AuthGuard cho đường dẫn mặc định
  { path: 'user', component: usersComponent },
  { path: 'tab-panel', component: TabPanelComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'form-user', component: FormUserComponent },
  { path: 'blank', component: BlankComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Loại bỏ đường dẫn mặc định, vì nó đã được thêm ở trên
];

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
