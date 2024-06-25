import { Injectable } from '@angular/core';
import BASE_URL from './helper';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  public signup(user:any){
    return this.http.post(`${BASE_URL}/register`, user);
  }

  public login(credentials: any){
    return this.http.post(`${BASE_URL}/login`, credentials);
  }
  public getAllBooks(){
    return this.http.get(`${BASE_URL}/ebook`);
  }

  public addbooks(addbook:any){
    return this.http.post(`${BASE_URL}/ebook`,addbook);
  }

}
