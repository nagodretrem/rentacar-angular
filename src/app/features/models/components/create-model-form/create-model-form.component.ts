import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostModelRequest } from '../../models/post-model-request';
import { ControlErrorMessagePipe } from '../../../../core/pipes/control-error-message.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlErrorMessagePipe
  ],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent {
form: FormGroup = this.fb.group({

  brandId:[
    '',
    [Validators.required],
  ],

  name: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ],
  ],
  modelYear: [
    '',
    [Validators.required]
  ],
  imageUrl: [
    '',
    [Validators.required]
  ],
  dailyPrice: [
    '',
    [Validators.required]
  ],
})

constructor(
  private fb: FormBuilder,
  private modelApiService: ModelsApiService,
  private router: Router
){}

createModel(){
  const request:PostModelRequest={
    brandId: this.form.value.brandId,
    name: this.form.value.name,
    modelYear: this.form.value.modelYear,
    imageUrl: this.form.value.imageUrl,
    dailyPrice: this.form.value.dailyPrice,
  };
  this.modelApiService.postModel(request).subscribe({
    next: (response) => {
      console.info('Response:', response)
    },
    error:(error) =>{
      console.error('Error:',error);
    },
    complete:() =>{
      console.info('Model created successfully');
      this.form.reset();
    }


  })
}

onFormSubmit() {
  console.log(this.form);

  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.createModel();
  this.router.navigate(['/home/models']);
}



}
