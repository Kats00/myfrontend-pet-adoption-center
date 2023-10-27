import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { ShowDogsComponent } from './components/show-dogs/show-dogs.component';
import { ShowDogComponent } from './components/show-dog/show-dog.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './Service/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AdoptedDogsComponent } from './components/adopted-dogs/adopted-dogs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dogs', component: ShowDogsComponent},
  {path: 'dog/:id', component: ShowDogComponent},
  {path: 'addDog', component: AddDogComponent},
  {path: 'addUser', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adoptees', component: AdoptedDogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
