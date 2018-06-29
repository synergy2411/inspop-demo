import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';

@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http){}
    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
       return this.http.get("assets/data/user-data.json")
            .map(response=><User[]>response.json().userdata)
            
    }
}
