import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginRequest } from '../Model/LoginRequest';

@Injectable({ providedIn: 'root' })
export class AuthService {
    URLs: string  
    
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {    
        this.URLs = 'http://localhost:18080/api';  

        this.currentUserSubject = new BehaviorSubject<any>(this.getUser());
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(loginRequest: LoginRequest): Observable<any> {
        const url = `${this.URLs}/login`;
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`
        });
    
        return this.http.post(url, loginRequest, { headers });
    }
    
    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    handleToken(token: string) {
        localStorage.setItem('token', token);
        this.currentUserSubject.next(this.getUser());
    }

    logout() {
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }

    getUser() {
        const token = localStorage.getItem('token');
        if (token && !this.jwtHelper.isTokenExpired(token)) {
        return this.jwtHelper.decodeToken(token);
        }
        return null;
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token !== null && !this.jwtHelper.isTokenExpired(token);
    }
  
}
