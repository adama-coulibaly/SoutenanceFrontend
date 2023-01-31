import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {

    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  
  getUsers(): Observable<any> {
    return this.http.get(API_URL + 'utilisateurs', { responseType: 'text' });
  }

  updateAvatar(iduser:any,file:any):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/auth/modifier/${iduser}`,file)
  }

  updateUsers(iduser:any,donne:any):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/auth/modifier/${iduser}`,donne)
  }

  getUnUser(iduser:any){
      return this.http.get(`http://localhost:8080/api/auth/user/${iduser}`)
  }

  
}