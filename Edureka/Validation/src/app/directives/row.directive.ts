import {
  asNativeElements,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[rowDirective]',
})
export class rowDirective {
  oldBackgroundColor = '';
  constructor(private elememtRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.oldBackgroundColor = this.elememtRef.nativeElement.style.backgroundColor;
    this.elememtRef.nativeElement.style.backgroundColor = '#ffffaa';
  }
  @HostListener('mouseleave') onMouseLeave() {
    let incomingBackgroundColor = this.elememtRef.nativeElement.style
      .backgroundColor;
    this.elememtRef.nativeElement.style.backgroundColor = this.oldBackgroundColor;
    this.oldBackgroundColor = incomingBackgroundColor;
  }
}
