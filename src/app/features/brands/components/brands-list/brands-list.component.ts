import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsApiService } from '../../services/brandsApi.service';
import { ModelListItemDto } from '../../../models/models/model-list-item-dto';


@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit{
    brands: BrandListItemDto[] = [];
    selectedIndex: number = 1;

    @Input() models: ModelListItemDto[] = [];


    constructor(
      private brandsApiService: BrandsApiService,
      private change: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this.brandsApiService.getList().subscribe((response) => {
        this.brands = response;
        this.change.markForCheck();
      });
    }

    selectTab(index: number) {
      this.selectedIndex = index;
    }

}
