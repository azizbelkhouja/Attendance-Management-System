import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

    ngOnInit() {
      this.loginForm = this.fb.group({
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
    }

}
