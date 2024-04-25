import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    this.element.nativeElement.classList.add('btn');
    this.element.nativeElement.classList.add('btn-primary');
  }
}
