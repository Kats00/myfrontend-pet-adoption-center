import { Component, OnInit } from '@angular/core';
import { Dog } from '../Model/dog';
import { DogService } from '../Service/dogservice';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent {
  dog: Dog = new Dog()
  data: any = {}

  constructor(
    private route: ActivatedRoute,
    private service: DogService
  ) {
    console.log('entered constructor' + this.dog.name)
  }

  ngOnInit(): void {
    console.log('entered oninit' + this.dog.name)
    this.route.params.forEach((params: Params) =>
      {
        if (params['id'] !== undefined) {
          const id = params['id'];
          console.log('Id ' + id)
          //this.navigated = true;
          this.service.getDog(id).subscribe(
            data => {
              this.dog = data
            }
          )
        } else {
          // this.navigated = false;
          // this.hero = new Hero();
          console.log('navigated is false')
        }
      }
    )
  }

  editDog(id: number, updatedDog: Dog): void {
    console.log('Updated dog Data:', updatedDog);
    this.service.editDog(id, updatedDog).subscribe((res) => {
        console.log('dog updated successfully!');
    });
  }
}
