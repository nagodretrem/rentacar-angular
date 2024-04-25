import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true,
})
export class NoCharacterInputDirective {

  constructor(private element: ElementRef) {}

@HostListener('input', ['$event'])
onInputChange(event: KeyboardEvent) {
  const initialValue = this.element.nativeElement.value;
  this.element.nativeElement.value = initialValue.replace(/[0-9]/g, '');
  if (initialValue !== this.element.nativeElement.value) {
    event.stopPropagation();
  }

}
 }
