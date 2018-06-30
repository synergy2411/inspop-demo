import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http, 
                private httpClient : HttpClient,
                private authService : AuthService){}
    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
       return this.http.get("assets/data/user-data.json")
            .map(response=><User[]>response.json().userdata)       
    }
    getHttpClientUserData(){
    //    return this.httpClient.get<User[]>("https://inspop-demo.firebaseio.com/userdata.json?auth="+this.authService.getToken());
    // return this.httpClient.get<User[]>("https://inspop-demo.firebaseio.com/userdata.json", {
    //     params : new HttpParams().set("auth", this.authService.getToken())
    // });
    return this.httpClient.get<User[]>("https://inspop-demo.firebaseio.com/userdata.json");
    }
    postHttpClientData(){
        this.httpClient.post("https://inspop-demo.firebaseio.com/mydata.json", {
            body : { name : "Foo"}
        })
        .subscribe(response=>console.log(response))
    }


}
