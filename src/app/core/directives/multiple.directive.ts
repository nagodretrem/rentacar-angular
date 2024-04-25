import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true,
})
export class MultipleDirective {
  @Input('appMultiple') set condition(count: number) {
    this.viewContainer.clear();
    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView(this.template);
    }
    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.template);
    }, 5000);
  }

  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}
