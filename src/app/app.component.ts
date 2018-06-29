import { Component } from '@angular/core';
import { User } from './model/user.model';
import { DataService } from './services/data.service';
// import { USER_DATA } from './data/mocks';

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
    this.dataService.getHttpUserData()
      .subscribe(data=>this.users = data);
  }
 constructor(public dataService : DataService){}
}
