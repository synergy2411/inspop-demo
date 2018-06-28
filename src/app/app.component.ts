import { Component } from '@angular/core';
import { User } from './model/user.model';
import { USER_DATA } from './data/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  handleEvent(data: string){
    this.title = data;
  }

  user: User ;
  ngOnInit(){
    this.user = USER_DATA;
  }
  // constructor(){
  //   this.user = USER_DATA;
  // }
}
