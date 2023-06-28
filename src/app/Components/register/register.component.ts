import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup = new FormGroup(
    {
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Z][A-Za-z]* ?[A-Za-z]{2,13}$'),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^^[A-Z][A-Za-z]* ?[A-Za-z]{2,13}$'),
      ]),
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
      confirmPassword: new FormControl(null, [Validators.required]),

      role: new FormControl(null, [Validators.required]),
    },
    {
      validators: this.ConfirmPass,
    }
  );

  ConfirmPass(registerform: any) {
    const password = registerform.get('password');
    const repassword = registerform.get('confirmPassword');
    if (password?.value === repassword?.value) {
      return null;
    }
    return repassword?.setErrors({
      rePassMatch: 'Repassword must match with Password',
    });
  }
  /************************* */
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  errorMessage: string = '';
  isLoading: boolean = false;

  submitRegisterForm(registerform: FormGroup) {
    console.log(registerform.value);
    this.isLoading = true;
    this._AuthService.signUp(registerform.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.message == 'success') {
          // navigate to login page
          this._Router.navigate(['/login']);
        } else {
          this.errorMessage = response.description;
        }
      },
    });
  }
  /******************************** */

  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

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
