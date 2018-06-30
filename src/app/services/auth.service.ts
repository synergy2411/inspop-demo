import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  token : any;
  login(username : string, password : string){
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(response=>{
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
          })
          .catch(err=> console.log(err));
          this.router.navigate(['/pipe']);
        console.log(response);
      })
      .catch(err=>console.log(err));
  }
  register(username : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(response=>console.log(response))
        .catch(err=>console.log(err));
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        console.log(token);
        this.token = token;
      })
      .catch(err=> console.log(err))
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }
  constructor(private router : Router) { }

}
