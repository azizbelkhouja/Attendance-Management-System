import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-manager-dashboard',
  imports: [SharedModule],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.scss'
})
export class ManagerDashboardComponent {

  employeeDetail:any;

  constructor(private managerService: ManagerService,) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.managerService.getEmployees().subscribe(res=> {
      this.employeeDetail = res;
      console.log(this.employeeDetail);
    })
  }
}
