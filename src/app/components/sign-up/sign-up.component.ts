import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Model/admin';
import { User } from 'src/app/Model/user';
import { Service } from 'src/app/Service/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  showForm: string = 'user';

  ngOnInit() {
    const toggleFormSwitch = document.getElementById('toggleFormSwitch') as HTMLInputElement;
    toggleFormSwitch.addEventListener('change', () => {
      this.showForm = toggleFormSwitch.checked ? 'admin' : 'user';
    });
  }
  

  user: User = new User()
  admin: Admin = new Admin()
  constructor(private service: Service) {}

  addUser(): void {
    this.service.addUser(this.user).subscribe((newUser) => {
      console.log('New user added successfully!', newUser);
    });
  }

  addAdmin(): void {
    this.service.addAdmin(this.admin).subscribe((newAdmin) => {
      console.log('New user added successfully!', newAdmin);
    });
  }
}
