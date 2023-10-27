import { Component } from '@angular/core';
import { Dog } from 'src/app/Model/dog';
import { AuthService } from 'src/app/Service/auth.service';
import { Service } from 'src/app/Service/services';

@Component({
  selector: 'app-adopted-dogs',
  templateUrl: './adopted-dogs.component.html',
  styleUrls: ['./adopted-dogs.component.css']
})
export class AdoptedDogsComponent {
  dogs: Dog[] = []
  currentUser: any;
  constructor(private service: Service, private authService: AuthService) {}


  ngOnInit():void {
    this.currentUser = this.authService.getUser();
    console.log(this.currentUser)
    this.service.getDogsByUser(this.currentUser.sub).subscribe((data: Dog[])=>
    {this.dogs = data});
  } 

}
