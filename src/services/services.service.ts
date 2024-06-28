import { Injectable } from '@angular/core';
import BASE_URL from './helper';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  [x: string]: any;

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
  public updatebook(id:any,update:any){
    return this.http.put(`${BASE_URL}/ebook?ebook_id=${id}`,update);
  }
  public deletBook(id:any){
    console.log(`${BASE_URL}/ebook?ebook_id=${id}`)
    return this.http.delete(`${BASE_URL}/ebook?ebook_id=${id}`)
  }
  public getBookById(id:any){
    return this.http.get(`${BASE_URL}/fetchbook?book_id=${id}`)
  }

  public memberShipPlan(){
    return this.http.get(`${BASE_URL}/membership`)
  }

  public buyMembership(data:any){
    return this.http.post(`${BASE_URL}/user/membership`,data)
  }
  public libraryManager(){
    return this.http.get(`${BASE_URL}/managers`)
  }

  public addManager(addmanager:any){
    return this.http.post(`${BASE_URL}/managers`,addmanager)
  }
  public getUser(){
    return this.http.get(`${BASE_URL}/fetchalluser`)
  }
  public getUserDetailById(id:any){
    return this.http.get(`${BASE_URL}/fetchuser/id?user_id=${id}`)
  }
}
