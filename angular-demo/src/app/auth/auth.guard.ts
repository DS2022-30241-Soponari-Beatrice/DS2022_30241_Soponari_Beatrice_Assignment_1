import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../services/authentificationService";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthentificationService, private router: Router) {

  }
  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isAdmin()) {
      return true;
    } else if(this.authService.isCostumer()){
      return this.router.parseUrl('/client-page');
    }
    else {
      this.authService.redirectUrl = state.url;
      return this.router.parseUrl('/login');
    }
  }

  checkLogin(url: string): true | Promise<boolean> {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.authService.redirectUrl = url;
    return this.router.navigateByUrl('/login');
  }
}
