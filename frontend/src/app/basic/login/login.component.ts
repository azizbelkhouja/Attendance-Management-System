import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './basic-services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from './basic-services/user-storage.service';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      (response) => {
        console.log('Login successful', response);
        UserStorageService.saveUser(response.user);
      },
      (error) => {
        this.message.error(`Bad Credentials`, { nzDuration: 3000 });
        console.error('Login failed', error);
      }
    );
  }



}
