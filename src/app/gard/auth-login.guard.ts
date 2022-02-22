import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {
  constructor(private userService:UserService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
/*     let token = this.userService.auth()
    console.log(token) */
    console.log(this.userService.auth())
    if (this.userService.auth()) {
       return true
     }
   return this.route.navigate(['connexion'])
  }
  
}
