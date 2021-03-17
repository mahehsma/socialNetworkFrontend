import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class AuthService {
    private token: string;
    isAuthenticated:boolean = false;
    private tokenTimer;

    constructor(private http: HttpClient, private router:Router){}

    getToken(){
        return this.token;
    }

    login(userName: string, password: string){
        const url ="http://localhost:3000/users/login"
        const body = {"userName" : userName, "password" : password};
        this.http.post(url, body).subscribe(
            response => {
                const token = response['token'];
                this.token = token;
                if(token) {
                    const expiresIn = response['expiresIn'];
                    this.setLogoutTimer(expiresIn*1000);
                    this.isAuthenticated = true;
                    const loggedInUntil = new Date().getTime() +expiresIn*1000;
                    this.saveAuthData(this.token, new Date(loggedInUntil))
                    this.router.navigate(['/newsfeed'])
                }
            }
        );
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.clearAuthData();
        this.router.navigate(['/']);
        clearTimeout(this.tokenTimer);
    }

    autoAuthUser(){
        const authInformation = this.getAuthData();
        if(authInformation.expirationDate && authInformation.token) {
            const now = new Date().getTime();
            const expiration = authInformation.expirationDate;
            if(now < expiration){
                this.token = authInformation.token;
                this.isAuthenticated = true;
                this.setLogoutTimer(expiration-now)
            }
        }
    }

    setLogoutTimer(timeInMs){
        this.tokenTimer = setTimeout(()=>{
            this.logout();
        }, timeInMs);
    }

    private getAuthData(){
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration')
        return {token: token, expirationDate: new Date(expirationDate).getTime()};
    }

    private saveAuthData(token: string, expirationDate: Date){
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    }

    private clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }
}