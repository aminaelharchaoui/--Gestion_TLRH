import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route:Router) {}
  email: string = '';
  password: string = '';
  message: string | null = null;

  login() {

  }
  submit() {
    this.message = 'An email with a new password has been sent !';

  }
  navigate(){
    this.route.navigate(['/dashboard/Forgotten'])
  }
}