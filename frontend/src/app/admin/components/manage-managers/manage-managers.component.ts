import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-managers',
  imports: [SharedModule],
  templateUrl: './manage-managers.component.html',
  styleUrl: './manage-managers.component.scss'
})
export class ManageManagersComponent {

  projects:any;

  constructor ( private adminService: AdminService) {}

  getAllProjects() {

    this.adminService.getProjects().subscribe(
      response => {
        this.projects = response;
        console.log('Projects fetched successfully', this.projects);
      });
  }
}
