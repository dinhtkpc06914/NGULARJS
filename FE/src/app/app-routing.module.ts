import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';

import { ContentComponent } from './admin/content/content.component';
import { UiComponent } from './admin/ui/ui.component';
import { TabPanelComponent } from './admin/tab-panel/tab-panel.component';
import {ChartComponent } from './admin/chart/chart.component';
import {projectsComponent } from './admin/projects/projects.component';
import {FormComponent } from './admin/form/form.component';
import {BlankComponent } from './admin/blank/blank.component';
import { ProjeactDetailsComponent } from './admin/projeact-details/projeact-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: ContentComponent },
  { path: 'ui', component: UiComponent },
  { path: 'tab-panel', component: TabPanelComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'project', component: projectsComponent },
  { path: 'form', component: FormComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'project/:id', component: ProjeactDetailsComponent },
  { path: '', redirectTo: '/project', pathMatch: 'full' }, // Đường dẫn mặc định
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
