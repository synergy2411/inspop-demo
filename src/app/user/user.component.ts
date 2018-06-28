import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Component({
    selector : 'app-user',
    //template : `<h1>User Component Loaded!</h1>`
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'],
    encapsulation : ViewEncapsulation.Emulated
})
export class UserComponent{

    @Input('title') title : string;
    @Input('user') user : User;
    @Output('childEvent') childEvent = new EventEmitter<string>();

    onKeyup(value : string){
        this.childEvent.emit(value);
    }

    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!!`);
    }

    
}