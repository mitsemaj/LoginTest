import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    // Simulate an API call with a random response time between 100ms and 600ms
    const randomResponseTime = Math.floor(Math.random() * 501) + 100;
    setTimeout(() => {
      // Check if the credentials are correct (use the provided credentials)
      // if (this.loginForm.username === 'MAINT' && this.loginForm.password === 'safetyiskey') {
      //   // Redirect to the desired page (e.g., dashboard) upon successful login
      //   alert('Login successful! Redirecting...');
      //   // You can implement the redirection logic here.
      //   this.router.navigate(['/home']);
      // } else {
      //   alert('Invalid credentials. Please try again.');
      // }
    }, randomResponseTime);
  }
}
