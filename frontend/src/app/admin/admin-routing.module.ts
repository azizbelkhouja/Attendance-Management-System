import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';

const routes: Routes = [
  {path:'dashboard', component: AdminDashboardComponent},
  {path:'manage-projects', component: ManageProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
