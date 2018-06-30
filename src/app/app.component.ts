import { Component } from '@angular/core';
import { User } from './model/user.model';
import { DataService } from './services/data.service';
// import { USER_DATA } from './data/mocks';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

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

  login : string = 'login';
  users: User[] ;
  increase(){
    this.dataService.counter++;
  }
  ngOnInit(){
   //this.users = this.dataService.getUserData();
    // this.dataService.getHttpUserData()
    //   .subscribe(data=>this.users = data);
      // this.dataService.getHttpClientUserData()
      //   .subscribe(data=>this.users = data);
       //this.dataService.postHttpClientData();
        firebase.initializeApp({
          apiKey: "AIzaSyD2v3bx9kqqn6uW6OTAb-Y8TDhTJGIZdVI",
          authDomain: "inspop-demo.firebaseapp.com"
        });
  }
 constructor(public dataService : DataService,
          public authService : AuthService){}
}

// npm cache clean --force
// npm config get proxy
// npm i firebase --save
//https://stackoverflow.com/questions/15126050/running-python-on-windows-for-node-js-dependencies