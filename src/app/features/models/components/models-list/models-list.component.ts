import { ModelsApiService } from './../../services/modelsApi.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { BrandsListComponent } from '../../../brands/components/brands-list/brands-list.component';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [
    CommonModule,
    BrandsListComponent
  ],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit{
  list : ModelListItemDto[] = [];


constructor(
  private modelsApiService: ModelsApiService,
  private change: ChangeDetectorRef
) { }


  ngOnInit(): void {
    this.modelsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }

}


