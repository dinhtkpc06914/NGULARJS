import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-user/list-user.component';

import { UpdateUserComponent } from './update-user/update-user.component';
const UserRoutes: Routes = [
  { path: 'list-user', component: ListUsersComponent },
  { path: 'users/:id', component: UpdateUserComponent },
  { path: 'add-user', component:AddUserComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
