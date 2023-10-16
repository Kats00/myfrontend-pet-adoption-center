import { Component, OnInit } from '@angular/core';
import { Dog } from '../Model/dog';
import { DogService } from '../Service/dogservice';

@Component({
  selector: 'app-show-dogs',
  templateUrl: './show-dogs.component.html',
  styleUrls: ['./show-dogs.component.css']
})
export class ShowDogsComponent {
  dogs: Dog[] = []
  constructor(private service: DogService) {}

  ngOnInit():void {
    this.service.getDogs().subscribe((data: Dog[])=>
    {this.dogs = data});
  } 

  deleteDog(id:number):void{
    this.service.deleteDog(id).subscribe(() => {
      console.log('Dog ' + id + ' deleted successfully');
    });
  }
}
