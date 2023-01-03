import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getUser(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.GetToken()}`,
    });

    const requestOptions = { headers: headers };
    return this.http.get(`${this.baseUrl}/user/${id}`, requestOptions);
  }
}
