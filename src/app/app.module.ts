import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HeaderComponent } from './admin/header/header.component';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { ContentComponent } from './admin/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
