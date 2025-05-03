import { Injectable } from '@angular/core';

const USER = 'att_user'

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  static saveUser(user:any):void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getUser(): any {
    const data = localStorage.getItem(USER);
    if (!data) {
      return null;
    }
  
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      return null;
    }
  }

  static getUserId():string {
    const user = this.getUser();
    return user ? user.id : '';
  }

  static getUserProjectId():string {
    const user = this.getUser();
    return user ? user.projectId : '';
  }

  static getUserRole():string {
    const user = this.getUser();
    return user ? user.userRole : '';
  }

  static isAdminLoggedIn(): boolean {
    if (this.getUserRole() == '') {
      return false;
    }

    const role:string = this.getUserRole();
    return role == 'ADMIN';
  }

  static isEmployeeLoggedIn(): boolean {
    if (this.getUserRole() == '') {
      return false;
    }

    const role:string = this.getUserRole();
    return role == 'EMPLOYEE';
  }

  static isManagerLoggedIn(): boolean {
    if (this.getUserRole() == '') {
      return false;
    }

    const role:string = this.getUserRole();
    return role == 'MANAGER';
  }

  static signOut():void {
    window.localStorage.removeItem(USER);
  }

}
