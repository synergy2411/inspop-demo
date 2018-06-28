import { Component } from '@angular/core';
import { User } from './model/user.model';

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

  user: User = {
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1964"),
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    image: 'assets/images/bill.jpg',
    vote: 120
  }
}
