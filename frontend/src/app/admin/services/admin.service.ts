import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:1111";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addProject(project:any): Observable<any> {
    return this.http.post(`${url}/api/projects/add`, project);
  }

  getProjects(): Observable<any> {
    return this.http.get(`${url}/api/projects/all`);
  }

  addUser(data:any): Observable<any> {
    return this.http.post(`${url}/api/admin/create-user`, data);
  }

  getAllManagers(): Observable<any> {
    return this.http.get(`${url}/api/admin/managers`);
  }

}
