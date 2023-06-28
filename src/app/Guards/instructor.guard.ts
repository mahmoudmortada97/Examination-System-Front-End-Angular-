import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InstructorGuard implements CanActivate {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._AuthService.userData.getValue() != null) {
      if (localStorage.getItem('userRole') == 'instructor') {
        return true;
      } else {
        this._Router.navigate(['/home']);
        return false;
      }
    } else {
      this._Router.navigate(['/login']);
      return false;
    }
  }
}
