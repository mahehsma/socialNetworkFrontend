import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class AuthService {
    private token: string;
    private tokenTimer;

    constructor(private http: HttpClient, private router:Router){}

    getToken(){
        return this.token;
    }

    login(userName: string, password: string, callback){
        const url ="http://localhost:3000/users/login"
        const body = {"userName" : userName, "password" : password};
        this.http.post(url, body).subscribe(
            response => {
                this.token = response['token'];
                this.saveAuthData(this.token, null)
                callback(response);
            }
        );
    }

    logout() {
        this.token = null;
        this.clearAuthData();
        this.router.navigate(['/']);
    }

    autoAuthUser(){
        const authInformation = this.getAuthData();
    }

    isAuthenticated(){
        return this.token !== null;
    }

    private getAuthData(){
        const token = localStorage.getItem('token');
        // const expirationDate = localStorage.getItem('expiration')
        if(token)
            return this.token = token;
        return null;
    }

    private saveAuthData(token: string, expirationDate: Date){
        localStorage.setItem('token', token);
        // localStorage.setItem('expiration', expirationDate.toISOString());
    }

    private clearAuthData() {
        localStorage.removeItem('token');
        // localStorage.removeItem('expiration');
    }
}