import { Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthentificationService} from "../services/authentificationService";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationComponent implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | Promise<boolean> {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.authService.redirectUrl = url;
    return this.router.navigateByUrl('/login');
  }

}
