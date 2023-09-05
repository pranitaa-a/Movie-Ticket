import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private http: HttpClient) {}

  login() {
    const userCredentials = {
      email: this.email,
      password: this.password,
    };

    this.http.post('/api/login', userCredentials).subscribe(
      (response) => {
        // Login successful, handle the response.
      },
      (error) => {
        // Handle login error.
      }
    );
  }
}
