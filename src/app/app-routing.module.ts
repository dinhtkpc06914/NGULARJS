import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/header/header.component';
import { ContentComponent } from './admin/content/content.component';
import { UiComponent } from './admin/ui/ui.component';
import { TabPanelComponent } from './admin/tab-panel/tab-panel.component';
import {ChartComponent } from './admin/chart/chart.component';
import {TableComponent } from './admin/table/table.component';
import {FormComponent } from './admin/form/form.component';
import {BlankComponent } from './admin/blank/blank.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HeaderComponent },
  { path: '', component: ContentComponent },
  { path: 'ui', component: UiComponent },
  { path: 'tab-panel', component: TabPanelComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'blank', component: BlankComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
