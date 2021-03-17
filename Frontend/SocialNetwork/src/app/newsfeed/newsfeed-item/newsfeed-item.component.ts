import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed-item',
  templateUrl: './newsfeed-item.component.html',
  styleUrls: ['./newsfeed-item.component.css']
})
export class NewsfeedItemComponent implements OnInit {
  @Input() item; 
  url = Math.random() > 0.5 ? "http://localhost:3000/image/Unbenannt.png" : "http://localhost:3000/image/landschaft.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  hasImage(): boolean{
    // return this.item.content != null;
    return true;
  }

  getDate(){
    const now = new Date().getTime();
    const difference = now - new Date(this.item['createdAt']).getTime();
    const differenceInSek = difference / 1000;
    if(differenceInSek < 60)
      return "a few seconds ago";
    if(differenceInSek < 3600)
      return Math.round(differenceInSek/60) + " minutes ago";
    if(differenceInSek < 3600 * 24)
      return Math.round(differenceInSek/3600) + " hours ago";
    return Math.round(differenceInSek/(3600 *24)) + " days ago"
  }

  

}
