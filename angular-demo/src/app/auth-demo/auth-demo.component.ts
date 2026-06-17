import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-demo.component.html',
  styleUrl: './auth-demo.component.css'
})
export class AuthDemoComponent {
  isAuthenticated = false;
  token: string | null = null;

  login() {
    // Mock login API call
    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.MockToken123456789";
    this.isAuthenticated = true;
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
  }
}
