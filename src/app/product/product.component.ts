import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  id : number; 
  name : string;
  page_no : number;
  constructor(private route : ActivatedRoute) { 
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];
    
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.name = params['name'];
    })
    this.route.queryParams.subscribe(queryParams=>{
      this.page_no = +queryParams['page_no']
    })
  }
}
