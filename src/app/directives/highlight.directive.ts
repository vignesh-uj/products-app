import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() 
  color = '';

  @Input() 
  defaultColor = ''

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
    // this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
    // this.highlight('');
  }

}
