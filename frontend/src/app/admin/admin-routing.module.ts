import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';
import { ManageManagersComponent } from './components/manage-managers/manage-managers.component';

const routes: Routes = [
  {path:'dashboard', component: AdminDashboardComponent},
  {path:'manage-projects', component: ManageProjectsComponent},
  {path:'manage-managers', component: ManageManagersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
