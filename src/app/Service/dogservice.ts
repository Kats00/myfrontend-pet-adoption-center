import {Observable} from "rxjs";
import {Dog} from "../Model/dog";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class DogService { 
    dogsUrl: string  
    constructor(private http: HttpClient) {    
    this.dogsUrl = 'http://localhost:18080/api';  
    }  
    
    public getDog(id: number): Observable<Dog> {    
        return this.http.get<Dog>(this.dogsUrl + '/show-dog/' + id.toString()); 
    }

    public getDogs(): Observable<Dog[]> {    
        return this.http.get<Dog[]>(this.dogsUrl + '/dogs/');  
    }

    public editDog(id: number, data: any): Observable<Dog> {
        const url = this.dogsUrl + '/update-dog/' + id.toString();
        console.log('Sending PUT request to:', url);
    
        return this.http.put<Dog>(url, data);
    }

    public deleteDog(id: number): Observable<any>{
        return this.http.delete(this.dogsUrl+ '/delete-dog/' + id.toString());
    }

    public addDog(newDogData: any): Observable<Dog> {
        const url = this.dogsUrl + '/add-dog';
        console.log('Sending POST request to:', url);
    
        return this.http.post<Dog>(url, newDogData);
    }

}