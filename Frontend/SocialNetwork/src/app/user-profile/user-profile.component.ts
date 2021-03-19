import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;
  tab:number = 1;
  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("router data")
    console.log(this.route.params['_value']['username'])
    const username = this.route.params['_value']['username']
    const url ="http://localhost:3000/users/"+username
    this.http.get(url).subscribe(response => {
      console.log(response);
      const user = response['user'];
      if(user)
        this.user = user;
    })
  }

  toggle(num:number){
    this.tab = num;
  }

  follow(){
    const username = this.route.params['_value']['username']
    const url ="http://localhost:3000/follow/"+username
    this.http.post(url,"").subscribe(response => {
      console.log(response)
    })
  }

}
