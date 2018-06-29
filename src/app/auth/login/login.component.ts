import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(f : NgForm){
    console.log("Username : " + f.value.username + 
        "\nPassword : " + f.value.password);
  }
  constructor() { }

  ngOnInit() {
  }

}
