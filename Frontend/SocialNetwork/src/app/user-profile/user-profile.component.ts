import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const url ="http://localhost:3000/users/merdan"
    this.http.get(url).subscribe(response => {
      console.log(response);
      const user = response['user'];
      if(user)
        this.user = user;
    })
  }

}
