import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {
  hasClass = false;

  @Input("appToggleClass") classToToggle?: string;

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @HostListener("click") onClick() {
    if (!this.hasClass) {
      this.renderer.addClass(this.el.nativeElement,
        this.classToToggle || 'default-class')
      this.hasClass = true;
    }
    else {
      this.renderer.removeClass(this.el.nativeElement,
        this.classToToggle || 'default-class')
      this.hasClass = false;
    }
  }

}
