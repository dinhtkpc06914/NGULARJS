import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { HeaderComponent } from './admin/header/header.component';
import { HomeComponent } from './admin/home/home.component'; // Import HomeComponent
=======

import { HeaderComponent } from './admin/header/header.component';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
>>>>>>> 3a5b3f8d5b5b1efac4f485f2f12547a9957ebd2c
import { ContentComponent } from './admin/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Thêm AppRoutingModule vào imports
=======
    CategoriesComponent,
    HeaderComponent,
    StarComponent,
    ProductListComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Add FormsModule here
>>>>>>> 3a5b3f8d5b5b1efac4f485f2f12547a9957ebd2c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
