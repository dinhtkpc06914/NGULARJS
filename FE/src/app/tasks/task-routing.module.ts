import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListtaskComponent } from './list-task/list-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { AuthGuard } from '../auth/auth.guard';
const TaskRoutes: Routes = [
  { path: 'list-task', component: ListtaskComponent,canActivate: [AuthGuard] },
  { path: 'add-task', component: AddTaskComponent,canActivate: [AuthGuard] },
  { path: 'update-task/:id', component: UpdateTaskComponent,canActivate: [AuthGuard]}
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
export class TaskRoutingModule { }
