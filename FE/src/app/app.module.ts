import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { ChartComponent } from './chart/chart.component';
import { BlankComponent } from './blank/blank.component';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import { UsersService } from './services/user.service';
import { APP_BASE_HREF } from '@angular/common';
import { usersComponent } from './users/user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './tasks/task.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectModule } from './projects/project.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    usersComponent,
    TabPanelComponent,
    ChartComponent,
    BlankComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TaskModule,
    NgxPaginationModule,
    ProjectModule
 

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
