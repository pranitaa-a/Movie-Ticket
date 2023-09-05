import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private http: HttpClient) {}

  register() {
    const newUser = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
    };

    this.http.post('/api/register', newUser).subscribe(
      (response) => {
        // Registration successful, handle the response.
      },
      (error) => {
        // Handle registration error.
      }
    );
  }
}
