import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowDogComponent } from './components/show-dog/show-dog.component';
import { ShowDogsComponent } from './components/show-dogs/show-dogs.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NavbarComponent } from './Site-Elements/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './Site-Elements/header/header.component';
import { FooterComponent } from './Site-Elements/footer/footer.component';
import { AdoptedDogsComponent } from './components/adopted-dogs/adopted-dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDogComponent,
    ShowDogsComponent,
    AddDogComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdoptedDogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS } // Add this line
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
