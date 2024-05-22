import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { FooterComponent } from './admin/footer/footer.component';
import { ContentComponent } from './admin/content/content.component';
import { UiComponent } from './admin/ui/ui.component';
import { TabPanelComponent } from './admin/tab-panel/tab-panel.component';
import { ChartComponent } from './admin/chart/chart.component';
import { TableComponent } from './admin/table/table.component';
import { FormComponent } from './admin/form/form.component';
import { BlankComponent } from './admin/blank/blank.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    UiComponent,
    TabPanelComponent,
    ChartComponent,
    TableComponent,
    FormComponent,
    BlankComponent,
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