import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  tab:number = 1;
  constructor(private http:HttpClient, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; //for reloading component
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
