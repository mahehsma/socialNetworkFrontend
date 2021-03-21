import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user-interface';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
