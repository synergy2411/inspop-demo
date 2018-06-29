import { Component, ViewEncapsulation, Input, Output, EventEmitter,
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
    DoCheck, 
    SimpleChanges} from '@angular/core';
import { User } from '../model/user.model';
import { AppComponent } from '../app.component';
import { DataService } from '../services/data.service';

@Component({
    selector : 'app-user',
    //template : `<h1>User Component Loaded!</h1>`
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css'],
    encapsulation : ViewEncapsulation.Emulated,
    providers : [DataService]
})
export class UserComponent 
// implements   
// OnInit,
// OnChanges,
// AfterContentChecked,
// AfterContentInit,
// AfterViewChecked,
// AfterViewInit,
// OnDestroy,
// DoCheck     
{   
    
    data = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve("Sample Data"), 2000);
    })
    

    myClasses = {
        'myBorder' : true, 
        'myTransform' : false
    }

    @Input('title') title : string;
    @Input('users') users : User[];
    @Output('childEvent') childEvent = new EventEmitter<string>();
    newColor = 'red';
    onKeyup(value : string){
        this.childEvent.emit(value);
    }

    moreInfo(user : User){
        this.myClasses.myBorder = false;
        this.myClasses.myTransform = true;
        alert(`${user.firstName} is working with ${user.company}!!`);
    }
    increase(){
        this.dataService.counter++;
    }
    constructor(public dataService : DataService){
        console.log("Constructor")}
    // ngOnInit(){console.log("ngOnInit")}
    // ngOnChanges( changes : SimpleChanges){
    //     console.log("ngOnChanges");
    //     console.log(changes);
    // }
    // ngAfterContentChecked(){console.log("ngAfterContentChecked")}
    // ngAfterContentInit(){console.log("ngAfterContentInit")}
    // ngAfterViewChecked(){console.log("ngAfterViewChecked")}
    // ngAfterViewInit(){console.log("ngAfterViewInit")}
    // ngOnDestroy(){console.log("ngOnDestroy")}
    // ngDoCheck(){console.log("ngDoCheck")}

}