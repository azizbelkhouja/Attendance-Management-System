import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../basic-services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from '../basic-services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['admin@admin.com', [Validators.required]],
      password: ['admin', [Validators.required]],
      remember: [true]
    });
  }

  submitForm() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      (response) => {
        UserStorageService.saveUser(response);

        if(UserStorageService.isAdminLoggedIn()) {
          this.message.success(`Welcome Admin`, { nzDuration: 3000 });
          this.router.navigateByUrl('/admin/dashboard');
        } else if (UserStorageService.isManagerLoggedIn()) {
          this.message.success(`Welcome Manager`, { nzDuration: 3000 });
          this.router.navigateByUrl('/manager/dashboard');
        } else if (UserStorageService.isEmployeeLoggedIn()) {
          this.message.success(`Welcome Employee`, { nzDuration: 3000 });
          this.router.navigateByUrl('/employee/dashboard');
        }

        console.log('Login successful', response);
      },
      (error) => {
        this.message.error(`Bad Credentials`, { nzDuration: 3000 });
        console.error('Login failed', error);
      }
    );
  }



}
