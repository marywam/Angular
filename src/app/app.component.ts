import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bind';

  centerText : boolean = true;
  
  postTitle! : string;
  postDetails! : string;
  imageUrl! : string;
  postUrl! : string;
  addBackground!: boolean;

  onKeyup(){

  }
}
