import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  newsfeed = [];

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
    this.onLoadNewsfeed();
  }

  onLoadNewsfeed(){
    const url ="http://localhost:3000/newsfeed"
    this.http.get(url).subscribe(result => {
      this.newsfeed = result['msg'];
    });
  }
  

}
