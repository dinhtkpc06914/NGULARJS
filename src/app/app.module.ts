import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { HeaderComponent } from './admin/header/header.component';
import { HomeComponent } from './admin/home/home.component'; // Import HomeComponent
import { ContentComponent } from './admin/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Thêm AppRoutingModule vào imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
