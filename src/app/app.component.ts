import { Component } from '@angular/core';
import { User } from './model/user.model';
import { DataService } from './services/data.service';
// import { USER_DATA } from './data/mocks';
import * as firebase from 'firebase';

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

  users: User[] ;
  increase(){
    this.dataService.counter++;
  }
  ngOnInit(){
   // this.users = this.dataService.getUserData();
    // this.dataService.getHttpUserData()
    //   .subscribe(data=>this.users = data);
      this.dataService.getHttpClientUserData()
        .subscribe(data=>this.users = data);
        this.dataService.postHttpClientData();
        firebase.initializeApp({
          apiKey: "AIzaSyD2v3bx9kqqn6uW6OTAb-Y8TDhTJGIZdVI",
          authDomain: "inspop-demo.firebaseapp.com"
        });
  }
 constructor(public dataService : DataService){}
}

// npm i firebase --save