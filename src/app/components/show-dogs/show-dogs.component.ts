import { Component, OnInit } from '@angular/core';
import { Dog } from '../../Model/dog';
import { Service } from '../../Service/services';
import { AuthService } from 'src/app/Service/auth.service';
import { AdoptionRequest } from 'src/app/Model/AdoptionRequest';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent {
  dogs: Dog[] = []
  currentUser: any;
  constructor(private service: Service, private authService: AuthService) {}


  ngOnInit():void {
    this.service.getDogs().subscribe((data: Dog[])=>
    {this.dogs = data});

    this.currentUser = this.authService.getUser();
    console.log(this.currentUser)
  } 

  deleteDog(id:number):void{
    this.service.deleteDog(id).subscribe(() => {
      console.log('Dog ' + id + ' deleted successfully');
    });
  }

  adoptDog(id: number): void {
    let adoptionRequest = new AdoptionRequest();
    adoptionRequest.username = this.currentUser.sub;
    adoptionRequest.dogId = id;

    let username = this.currentUser.sub;
    this.service.adoptDog(adoptionRequest).subscribe(
      (response) => {
        console.log('Dog ' + id + ' adopted successfully');
      },
      (error) => {
        console.error('Error adopting dog:', error);
      }
    );
  }
  
}
