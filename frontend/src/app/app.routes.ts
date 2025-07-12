import { Routes } from '@angular/router';
import { LoginComponent } from './basic/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
];
