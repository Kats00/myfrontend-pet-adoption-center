import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCountryComponent } from './show-country/show-country.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { ShowDogComponent } from './show-dog/show-dog.component';

const routes: Routes = [
  {path: '', redirectTo: '/contries', pathMatch: 'full'},
  {path: 'countries', component: ShowCountriesComponent},
  {path: 'country/:id', component: ShowCountryComponent},
  {path: 'dogs', component: ShowDogsComponent},
  {path: 'dog/:id', component: ShowDogComponent},
  {path: 'addDog', component: AddDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
