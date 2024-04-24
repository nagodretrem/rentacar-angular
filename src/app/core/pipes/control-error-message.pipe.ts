import { Pipe, type PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true,
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: any[]): unknown {
    if(value?.["required"]){
      return 'This field is required';
    }
    if(value?.["minlength"]){
      return 'This field must be at least 3 characters';
    }
    if(value?.["maxlength"]){
      return 'This field must be at most 20 characters';
    }
    return 'This field is invalid';
  }
}
