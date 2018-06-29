import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[app-highlight]'
})
export class HighlightDirective{
    @Input('myColor') myColor : string;
    @HostBinding('style.backgroundColor') bgColor : any;

    @HostListener('mouseenter') mouseenter(eventdata){
       // this.elementRef.nativeElement.style.backgroundColor = this.myColor;
       this.bgColor = this.myColor;
    }
    @HostListener('mouseleave') mouseleave(eventdata){
        // this.elementRef.nativeElement.style.backgroundColor = 'transparent';
        this.bgColor = 'transparent';
    }
    constructor(private elementRef : ElementRef){
        //console.log(this.myColor);      //?
        this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}