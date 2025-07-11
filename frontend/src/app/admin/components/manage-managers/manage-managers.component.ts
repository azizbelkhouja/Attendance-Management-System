import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-manage-managers',
  imports: [SharedModule, NzSelectModule],
  templateUrl: './manage-managers.component.html',
  styleUrl: './manage-managers.component.scss'
})
export class ManageManagersComponent {

  projects:any;
  managerForm!: FormGroup;
  managers: any;

  constructor ( private adminService: AdminService,
    private fb:FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.managerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      projectId: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    this.getAllProjects();
    this.getAllManagers();
  }

  getAllProjects() {

    this.adminService.getProjects().subscribe(
      response => {
        this.projects = response;
        console.log('Projects fetched successfully', this.projects);
      });
  }

  getAllManagers() {
    this.adminService.getAllManagers().subscribe(res => {
      this.managers = res;
      console.log('Managers fetched successfully', this.managers);
    });
  }

  submitForm() {
    const data = this.managerForm.value;
    data.userRole = "MANAGER";

    this.adminService.addUser(data).subscribe( res=> {
      this.message.success('Manager added successfully');
      this.managerForm.reset();
    }, error => {
      this.message.error('Failed to add manager');
      console.error('Error adding manager', error);
    });
  }
}
