import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  newsfeed = [];

  constructor(private http:HttpClient, private authService: AuthService ) { }

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
