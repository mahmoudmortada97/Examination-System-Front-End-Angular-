import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  logInform: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/i),
      Validators.required,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!_])(?!.*\s).{6,}$/
      ),
    ]),
  });

  errorMessage: boolean = false;
  isLoading: boolean = false;

  submitlogInForm(logInform: FormGroup) {
    this.isLoading = true;
    //console.log(logInform.value);
    this._AuthService.signIn(logInform.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        // console.log(response);

        if (response.message == 'success') {
          this.errorMessage = false;
          //save token
          localStorage.setItem('userToken', response.token);
          localStorage.setItem('userRole', response.role);

          //call and transform UserDecode
          this._AuthService.saveUserData();
          // navigate to home page
          this._Router.navigate(['/home']);
        } else {
          this.errorMessage = true;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = true;
        console.log(error);
      },
    });
  }

  /************************** */
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this._Router.navigate(['/home']);
        } else {
        }
      },
    });
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const field = input.closest('.form-group');
    if (input.value) {
      field?.classList.add('field--not-empty');
    } else {
      field?.classList.remove('field--not-empty');
    }
  }
}
