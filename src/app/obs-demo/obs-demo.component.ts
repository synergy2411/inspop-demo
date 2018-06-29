import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // interval

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {
  num : number;
  numObs : any;
  data : string;

  unsub(){
    this.numObs.unsubscribe();
  }
  constructor() { 
    Observable.create((observer)=>{
      setTimeout(()=>{observer.next("First Package")}, 1000);
      setTimeout(()=>{observer.next("Second Package")}, 2000);
      setTimeout(()=>{observer.next("Third Package")}, 4000);
      setTimeout(()=>{observer.complete()}, 5000);
    }).subscribe(
      (data)=>{this.data = data;},
      (err)=>{}, 
      ()=>{console.log("Completed!")}
    )
    
    this.numObs = Observable.interval(1000)
    .subscribe(num=> this.num = num)
  }

  ngOnInit() {
  }

}
