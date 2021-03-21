import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
  @Input() post;
  url: string;

  constructor() { }

  ngOnInit(): void {
    this.url = "http://localhost:3000/image/"+this.post['content'];
  }

}
