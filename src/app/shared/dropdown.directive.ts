import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  @HostBinding('class.open') open = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.open = this.elementRef.nativeElement.contains(event.target)
      ? !this.open
      : false;
  }

  constructor(private elementRef: ElementRef) {}
}
