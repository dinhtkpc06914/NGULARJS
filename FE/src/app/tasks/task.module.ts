import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListtaskComponent } from './list-task/list-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    RouterModule
  ],
  declarations: [
    AddTaskComponent,
    ListtaskComponent,
    UpdateTaskComponent,
  ],
  exports: [
    AddTaskComponent,
    ListtaskComponent,
  ]
})
export class TaskModule { }
