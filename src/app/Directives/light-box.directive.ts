import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

    @Input()
    color:String='green';


  constructor(private elemref:ElementRef) {
    elemref.nativeElement.style.border="5px solid "+this.color;
   }
   
   @HostListener('mouseover') onMouseHover(): void{
    this.elemref.nativeElement.style.border="5px solid blue"
    this.elemref.nativeElement.style.width="60px";
   }
   @HostListener('mouseout')
   onMouseOut(){
    this.elemref.nativeElement.style.border="5px solid "+this.color
    this.elemref.nativeElement.style.width="50px";
   }
     
}
