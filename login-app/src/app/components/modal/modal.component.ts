import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  loginForm: FormGroup<any>;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  login() {
    // Simulate an API call with a random response time between 100ms and 600ms
    const randomResponseTime = Math.floor(Math.random() * 501) + 100;
    setTimeout(() => {
      //Check if the credentials are correct (use the provided credentials)
      if (this.loginForm.get('username')?.value === 'MAINT' && this.loginForm.get('password')?.value === 'safetyiskey') {
        this.close();
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }, randomResponseTime);
  }
}
