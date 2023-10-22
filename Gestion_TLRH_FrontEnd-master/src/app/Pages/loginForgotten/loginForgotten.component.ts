import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './loginForgotten.component.html',
  styleUrls: ['./loginForgotten.component.css'],
})
export class LoginForgottenComponent {
  email: string = '';
  password: string = '';
  message: string | null = null;

  login() {

  }
  passwordForgotten() {
    this.message = 'An email with a new password has been sent !';

  }
}