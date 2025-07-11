import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-manage-employees',
  imports: [SharedModule, NzSelectModule],
  templateUrl: './manage-employees.component.html',
  styleUrl: './manage-employees.component.scss'
})
export class ManageEmployeesComponent {

  employeeForm! : FormGroup;
  projects: any;

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      projectId: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    this.getAllProjects();
  }

  getAllProjects() {
    this.adminService.getProjects().subscribe(res=>{
      this.projects = res;
      console.log(this.projects);
    });
  }

}
