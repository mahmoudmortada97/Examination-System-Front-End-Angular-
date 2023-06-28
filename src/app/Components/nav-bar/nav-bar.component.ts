import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isLogin: boolean = false;
  isStudent: boolean = false;

  //new
  userName: any;

  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.isLogin = true;
          if (localStorage.getItem('userRole') == 'instructor') {
            this.isStudent = true;
          }
          //new
          this.userName = this._AuthService.userData._value.unique_name;
        } else {
          this.isLogin = false;
          this.isStudent = false;

          //new
          this.userName = null;
        }
      },
    });
  }

  logOut() {
    this._AuthService.signOut();
  }
}
