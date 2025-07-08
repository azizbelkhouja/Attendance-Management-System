import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manage-projects',
  imports: [SharedModule],
  templateUrl: './manage-projects.component.html',
  styleUrl: './manage-projects.component.scss'
})
export class ManageProjectsComponent {

  projectForm! : FormGroup;

  constructor(private fb:FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService
  ){}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
    })
  }

  submitForm() {

    this.adminService.addProject(this.projectForm.value).subscribe({
      next: (res) => {
        this.message.success('Project added successfully');
        this.projectForm.reset();
      },
      error: (err) => {
        this.message.error('Failed to add project');
      }
    });
  }
}
