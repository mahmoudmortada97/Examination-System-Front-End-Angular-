import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }

  userData: any = new BehaviorSubject(null);

  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: object = jwtDecode(encodedToken);
    this.userData.next(decodedToken);

    console.log(this.userData);
  }

  signOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }

  signUp(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:44391/api/Account/register',
      userData
    );
  }

  signIn(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:44391/api/Account/login',
      userData
    );
  }
}
