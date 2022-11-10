import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {url} from "../utils";
import {Credentials} from "../models/credentials";
import {User} from "../models/user";
import {jwtToken} from "../models/jwtToken";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  redirectUrl: string | undefined;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<jwtToken> {
    return this.http.post<jwtToken>(`${url}/api/auth/login`, credentials).pipe(tap((jwt) => {
      localStorage.setItem('token',jwt.accessToken );
      localStorage.setItem('role', jwt.role)
    }));
  }
  register(user: User): Observable<User>{
    return this.http.post<User>(`${url}/api/auth/signup`, user);
  }

  loggedIn(): boolean {
    return localStorage.getItem('token') !== undefined;
  }
  isAdmin() : boolean
  {
    console.log("role =" +localStorage.getItem("role"))
    return localStorage.getItem("role") === "Admin";
  }

  isCostumer() : boolean
  {
    return localStorage.getItem("role") === "Client";
  }

  logOut(){
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  }
}
