import { Component, OnInit } from '@angular/core';
import { Country } from '../Model/country';
import { Countryservice } from '../Service/countryservice';

@Component({
  selector: 'app-show-countries',
  templateUrl: './show-countries.component.html',
  styleUrls: ['./show-countries.component.css']
})
export class ShowCountriesComponent implements OnInit{
  countries: Country[] = []
  constructor(private countryService: Countryservice) {}

  ngOnInit():void {
    this.countryService.getCountries().subscribe((data: Country[])=>
    {this.countries = data});
  } 

  deleteCountry(id:number):void{
    this.countryService.deleteCountry(id).subscribe(() => {
      console.log('Country ' + id + ' deleted successfully');
    });
  }
}
