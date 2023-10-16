import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCountriesComponent } from './show-countries/show-countries.component';
import { ShowCountryComponent } from './show-country/show-country.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowDogComponent } from './show-dog/show-dog.component';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCountriesComponent,
    ShowCountryComponent,
    ShowDogComponent,
    ShowDogsComponent,
    AddDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
