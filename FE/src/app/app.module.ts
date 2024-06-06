import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { ContentComponent } from './admin/content/content.component';
import { TabPanelComponent } from './admin/tab-panel/tab-panel.component';
import { ChartComponent } from './admin/chart/chart.component';
import { projectsComponent } from './admin/projects/projects.component';
import { FormComponent } from './admin/form/form.component';
import { BlankComponent } from './admin/blank/blank.component';
import { ProjectDetailsComponent } from './admin/project-detail/project-detail.component';
import { ProjectService } from './admin/services/project.service';
import { TaskComponent } from './admin/task/task.component';
import { TaskService } from './admin/services/task.service';
import { UsersService } from './admin/services/user.service';
import { FormTaskComponent } from './admin/form-task/form-task.component';
import { usersComponent } from './admin/users/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    usersComponent,
    TabPanelComponent,
    ChartComponent,
    projectsComponent,
    FormComponent,
    BlankComponent,

    ProjectDetailsComponent,
    FormTaskComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    TaskService,
    UsersService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
