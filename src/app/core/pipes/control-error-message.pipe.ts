import { Pipe, type PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorMessage',
  standalone: true,
})
export class ControlErrorMessagePipe implements PipeTransform {

  transform(error: ValidationErrors | undefined | null, ...args: any[]): unknown {
    if(error?.["required"]){
      return 'This field is required';
    }
    if(error?.["minlength"]){
      return 'This field must be at least 3 characters';
    }
    if(error?.["maxlength"]){
      return 'This field must be at most 20 characters';
    }
    return 'This field is invalid';
  }
}
