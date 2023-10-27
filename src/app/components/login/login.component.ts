import { Component } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { LoginRequest } from 'src/app/Model/LoginRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  username: string = ""
  password: string = ""

  login() {
    let loginRequest = new LoginRequest();
    loginRequest.username = this.username;
    loginRequest.password = this.password;

    this.authService.login(loginRequest).subscribe(
      response => {
        const token = response.token; 
        console.log('Received token:', token);
        this.authService.handleToken(token);
        const userInfo = this.authService.getUser();
        console.log(userInfo);
        
        this.router.navigate(['/']); 
      },
      error => {
        console.error('Error logging in:', error);
        alert('Error logging in. Please try again.');
      }
    );
  
  }
  
}
