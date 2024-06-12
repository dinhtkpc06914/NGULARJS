import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-user/list-user.component';
import { AuthGuard } from '../auth/auth.guard';
const TaskRoutes: Routes = [
  { path: 'list-user', component: ListUsersComponent,canActivate: [AuthGuard] },
  { path: 'add-user', component:AddUserComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(TaskRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
