import { Component } from '@angular/core';
import { Service } from '../../Service/services';
import { Dog } from '../../Model/dog';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent {
  dog: Dog = new Dog()
  constructor(private dogService: Service) {}

  addDog(): void {
    this.dogService.addDog(this.dog).subscribe((newDog) => {
      console.log('New dog added successfully!', newDog);
    });
  }
}
