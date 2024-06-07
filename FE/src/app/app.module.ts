import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { TabPanelComponent } from './admin/tab-panel/tab-panel.component';
import { ChartComponent } from './admin/chart/chart.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { FormComponent } from './admin/form/form.component';
import { BlankComponent } from './admin/blank/blank.component';
import { ProjectDetailsComponent } from './admin/project-detail/project-detail.component';
import { ProjectService } from './admin/services/project.service';
import { TaskService } from './admin/services/task.service';
import { UsersService } from './admin/services/user.service';
import { APP_BASE_HREF } from '@angular/common';
import { usersComponent } from './admin/users/user.component';
import { FormUserComponent } from './admin/form-user/form-user.component';
import { AuthModule } from './admin/auth/auth.module';
import { TaskModule } from './admin/tasks/task.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    usersComponent,
    TabPanelComponent,
    ChartComponent,
    ProjectsComponent,
    FormComponent,
    BlankComponent,
    ProjectDetailsComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TaskModule,
 

  ],
  providers: [
    ProjectService,
    TaskService,
    UsersService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
