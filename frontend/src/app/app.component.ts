import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { UserStorageService } from './basic/login/basic-services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  isEmployeeLoggedIn:boolean = UserStorageService.isEmployeeLoggedIn();
  isAdminLoggedIn:boolean = UserStorageService.isAdminLoggedIn();
  isManagerLoggedIn:boolean = UserStorageService.isManagerLoggedIn();

  constructor(private router:Router) {}
    
  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isEmployeeLoggedIn = UserStorageService.isEmployeeLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      this.isManagerLoggedIn = UserStorageService.isManagerLoggedIn();
    });
  }
  
  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('/');
  }

}
