import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'app-user',
    //template : `<h1>User Component Loaded!</h1>`
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'],
    encapsulation : ViewEncapsulation.Emulated
})
export class UserComponent{

    moreInfo(user){
        alert(`${user.firstName} is working with ${user.company}!!`);
    }

    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 21, 1964"),
        income : 50000,
        isWorking : true,
        company : "Microsoft",
        image : 'assets/images/bill.jpg'
    }
}