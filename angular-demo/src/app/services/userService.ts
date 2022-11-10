import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {url} from "../utils";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  delete(id: String) {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    console.log(`${url}/user/${id}`);
   return this.http.delete(`${url}/user/${id}`,headers);
  }

  getUsers(): Observable<User[]> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    return this.http.get<User[]>(`${url}/user`, headers);
  }

  updateUser(user:User): Observable<User> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    const id = user.id;
    return this.http.put<User>(`${url}/user/${id}`, user, headers);
  }
}
