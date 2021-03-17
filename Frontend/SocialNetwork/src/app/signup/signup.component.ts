import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName:String;
  password:String;
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  onUpdateUserName(value:String) {
    this.userName = value;
  }

  onUpdatePassword(value:String){
    this.password = value;
  }

  onLogin(){
    const url ="http://localhost:3000/users/create"
    const body = {"userName" : this.userName, "password" : this.password};
    console.log(url)
    console.log(body)
    this.http.post(url, body).subscribe((responseData)=> {
      try{
        console.log(responseData)
        this.router.navigate(['/newsfeed']);
        
      } catch {
        console.log("err")
      }
    });
  }
}
