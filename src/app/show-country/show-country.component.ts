import { Component, OnInit } from '@angular/core';
import { Country } from '../Model/country';
import { Countryservice } from '../Service/countryservice';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent {
  country: Country = new Country()
  data: any = {}

  constructor(
    private route: ActivatedRoute,
    private countryService: Countryservice
  ) {
    console.log('entered constructor' + this.country.name)
  }

  ngOnInit(): void {
    console.log('entered oninit' + this.country.name)
    this.route.params.forEach((params: Params) =>
      {
        if (params['id'] !== undefined) {
          const id = params['id'];
          console.log('Id ' + id)
          //this.navigated = true;
          this.countryService.getCountry(id).subscribe(
            data => {
              this.country = data
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

  editCountry(id: number, updatedCountry: Country): void {
    console.log('Updated Country Data:', updatedCountry);
    this.countryService.editCountry(id, updatedCountry).subscribe((res) => {
        console.log('Country updated successfully!');
    });
  }

}
