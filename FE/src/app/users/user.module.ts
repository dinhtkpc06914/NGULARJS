import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    UserRoutingModule
  ],
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    UpdateUserComponent
  ],
  exports: [
    AddUserComponent,
    ListUsersComponent,
    UpdateUserComponent
  ]
})
export class UserModule { 
 
}
