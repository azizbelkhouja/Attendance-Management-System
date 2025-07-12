import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manage-employees',
  imports: [SharedModule, NzSelectModule],
  templateUrl: './manage-employees.component.html',
  styleUrl: './manage-employees.component.scss'
})
export class ManageEmployeesComponent {

  employeeForm! : FormGroup;
  projects: any;
  employees: any;


  constructor(private fb: FormBuilder, private adminService: AdminService, private message: NzMessageService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      projectId: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    this.getAllProjects();
    this.getAllEmployees();
  }

  getAllProjects() {
    this.adminService.getProjects().subscribe(res=>{
      this.projects = res;
      console.log(this.projects);
    });
  }

  submitForm() {
    const data = this.employeeForm.value;
    data.userRole = "EMPLOYEE";

    this.adminService.addUser(data).subscribe( res=> {
      this.message.success('Employee added successfully');
      this.employeeForm.reset();
    }, error => {
      this.message.error('Failed to add employee');
      console.error('Error adding employee', error);
    });
  }

  getAllEmployees() {
    this.adminService.getAllEmployees().subscribe(res => {
      this.employees = res;
      console.log('Employees fetched successfully', this.employees);
    });
  }

}
