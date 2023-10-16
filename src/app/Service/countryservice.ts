import {Observable} from "rxjs";
import {Country} from "../Model/country";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class Countryservice { 
    countriesUrl: string  
    constructor(private http: HttpClient) {    
    this.countriesUrl = 'http://localhost:18080/api';  
    }  
    
    public getCountry(id: number): Observable<Country> {    
        return this.http.get<Country>(this.countriesUrl + '/show-country/' + id.toString()); 
    }

    public getCountries(): Observable<Country[]> {    
        return this.http.get<Country[]>(this.countriesUrl + '/countries/');  
    }

    public editCountry(id: number, data: any): Observable<Country> {
        const url = this.countriesUrl + '/update-country/' + id.toString();
        console.log('Sending PUT request to:', url);
    
        return this.http.put<Country>(url, data);
    }

    public deleteCountry(id: number): Observable<any>{
        return this.http.delete(this.countriesUrl+ '/delete-country/' + id.toString());
    }

}