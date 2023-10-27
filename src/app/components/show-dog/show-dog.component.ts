import { Component, OnInit } from '@angular/core';
import { Dog } from '../../Model/dog';
import { Service } from '../../Service/services';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent {
  dog: Dog = new Dog()
  data: any = {}
  currentUser: any;
  isInputDisabled: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private service: Service
  ) {
    console.log('entered constructor' + this.dog.name)
  }

  ngOnInit(): void {
    console.log('entered oninit' + this.dog.name)
    this.currentUser = this.authService.getUser();
    this.route.params.forEach((params: Params) =>
      {
        if (params['id'] !== undefined) {
          const id = params['id'];
          console.log('Id ' + id)
          this.service.getDog(id).subscribe(
            data => {
              this.dog = data
            }
          )
        } else {
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
