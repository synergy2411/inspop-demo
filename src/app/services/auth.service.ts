import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


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
          .catch(err=> console.log(err))
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

  constructor() { }

}
