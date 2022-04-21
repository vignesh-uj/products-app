import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoomer]'
})
export class ZoomerDirective {


  @Input() 
  size = '';

  constructor(private el: ElementRef) {
    // el.nativeElement.style.fontSize = '78px';
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.el.nativeElement.style.fontSize = this.size || '78px';
    // this.highlight('yellow');
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.el.nativeElement.style.fontSize = '12px';
    // this.highlight('');
  }

}
