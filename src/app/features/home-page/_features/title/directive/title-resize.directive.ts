import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTitleResize]'
})
export class TitleResizeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event : Event) {
    const scale = (document.body.clientHeight - window.pageYOffset*0.8) / document.body.clientHeight 
    this.el.nativeElement.style.setProperty('--scale', scale);
}

}
