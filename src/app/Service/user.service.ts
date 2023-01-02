import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  ProceedLogin(inputdata: any) {
    console.log(inputdata);
    return this.http.post('http://localhost:3000/auth/login', inputdata);
  }

  IsLooged() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null
      ? localStorage.getItem('token')
      : '';
  }
}
