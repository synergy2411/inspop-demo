import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getData(){
    this.dataService.getHttpClientUserData()
      .subscribe(data=>console.log(data));
  }
  login(f : NgForm){
    console.log("Username : " + f.value.username + 
        "\nPassword : " + f.value.password);
        this.authService.login(f.value.username, f.value.password);
  }
  constructor(private authService : AuthService, private dataService : DataService) { }

  ngOnInit() {
  }

}
