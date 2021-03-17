import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;

  constructor(private http:HttpClient, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onUpdateUserName(value:string) {
    this.userName = value;
  }

  onUpdatePassword(value:string){
    this.password = value;
  }

  onLogin(){
   this.authService.login(this.userName, this.password, (response: string) => {
    if(this.authService.getToken != null)
      this.router.navigate(['/newsfeed'])
   });
  }

}
