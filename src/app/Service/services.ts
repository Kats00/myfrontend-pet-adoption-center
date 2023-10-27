import {Observable, tap} from "rxjs";
import {Dog} from "../Model/dog";
import {Account} from "../Model/account";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';
import { AdoptionRequest } from "../Model/AdoptionRequest";

@Injectable({providedIn: 'root'})

export class Service { 
    URLs: string  
    constructor(private http: HttpClient, private authService: AuthService) {    
        this.URLs = 'http://localhost:18080/api';  
    }
    
    
    public getDog(id: number): Observable<Dog> {    
        return this.http.get<Dog>(this.URLs + '/show-dog/' + id.toString()); 
    }

    public getDogs(): Observable<Dog[]> {    
        return this.http.get<Dog[]>(this.URLs + '/dogs/');  
    }

    public editDog(id: number, data: any): Observable<Dog> {
        /*const url = this.URLs + '/update-dog/' + id.toString();
        console.log('Sending PUT request to:', url);
    
        return this.http.put<Dog>(url, data);*/

        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getToken()}`
        });
        const url = this.URLs + '/update-dog/' + id.toString();
        console.log('token: ', this.authService.getToken())
        console.log('Sending PUT request to:', url, "with headers:", headers);
    
        return this.http.put<Dog>(url, data, { headers })
            .pipe(
                tap(
                    (response: any) => console.log('Response from server:', response),
                    (error: any) => console.error('Error from server:', error)
                )
            );
    }

    public deleteDog(id: number): Observable<any>{
        return this.http.delete(this.URLs + '/delete-dog/' + id.toString());
    }

    public addDog(newDogData: any): Observable<Dog> {
        const url = this.URLs + '/add-dog';
        console.log('Sending POST request to:', url);
    
        return this.http.post<Dog>(url, newDogData);
    }

    adoptDog(adoptionRequest: AdoptionRequest): Observable<any> {
        return this.http.put(`${this.URLs}/adopt-dog/`, adoptionRequest);
    }

    public addUser(newUserData: any): Observable<Account>{
        const url = this.URLs + '/add-user';
        console.log('Sending POST request to:', url);
        console.log('with data: ', newUserData);
        return this.http.post<Account>(url, newUserData);
    }

    public addAdmin(newAdminData: any): Observable<Account>{
        const url = this.URLs + '/add-admin';
        console.log('Sending POST request to:', url);
        console.log('with data: ', newAdminData);
        return this.http.post<Account>(url, newAdminData);
    }

    getDogsByUser(username: string): Observable<Dog[]> {
        const url = `${this.URLs}/show-user-adopted/?username=${username}`; // Assuming your API supports this endpoint
        return this.http.get<Dog[]>(url);
    }

}