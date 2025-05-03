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

  static getUser():any {
    return JSON.parse(localStorage.getItem(USER));
  }
}
