import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection : ChangeDetectionStrategy.
})
export class ProductComponent  {
  id : number; 
  name : string;
  page_no : number;
  dangerUrl : string = "javascript:alert('Hello! I am NOT Safe!')";
  safeUrl : any;
  constructor(private route : ActivatedRoute,
            private sanitized : DomSanitizer,
            private cdRef : ChangeDetectorRef,
            private ngZone : NgZone) {
              // this.cdRef.
              this.ngZone.runOutsideAngular(()=>{
                
              })
              this.safeUrl = this.sanitized.bypassSecurityTrustUrl(this.dangerUrl);
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
