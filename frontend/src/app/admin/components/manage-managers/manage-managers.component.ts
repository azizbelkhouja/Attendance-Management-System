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
  }

  getAllProjects() {

    this.adminService.getProjects().subscribe(
      response => {
        this.projects = response;
        console.log('Projects fetched successfully', this.projects);
      });
  }
}
