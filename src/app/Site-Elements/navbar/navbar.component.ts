import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  currentUser: any = this.authService.getUser();
  
  logout(){
    this.authService.logout();
    let user = this.authService.getUser();
    console.log(user)
  }


}
