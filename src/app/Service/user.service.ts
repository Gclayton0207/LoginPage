import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';

  ProceedLogin(inputdata: any) {
    console.log(inputdata);
    return this.http.post(`${this.baseUrl}/auth/login`, inputdata);
  }

  IsLooged() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null
      ? localStorage.getItem('token')
      : '';
  }

  Register(inputdata: any) {
 
    return this.http.post(`${this.baseUrl}/auth/register`, inputdata);

  }


}
