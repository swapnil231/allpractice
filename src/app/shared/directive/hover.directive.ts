import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') mouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.border = '2px solid aqua';
  }

  @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.border = '';
  }
}
