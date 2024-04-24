import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RentalsApiService } from '../../services/rentals-api.service';
import { RentalDetailsItemDto } from '../../models/rental-details-dto';
import { VatAddPipe } from '../../../../core/pipes/vat-add.pipe';

@Component({
  selector: 'app-rentals-list',
  standalone: true,
  imports: [
    CommonModule,
    VatAddPipe
  ],
  templateUrl: './rentals-list.component.html',
  styleUrl: './rentals-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalsListComponent implements OnInit{
  list: Array<RentalDetailsItemDto> = [];
  totalPrice: number = 0;

  constructor(
    private rentalsService: RentalsApiService,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.getList();

  }

  getList() {
    this.rentalsService.getList().subscribe((rentals) => {
      this.list = rentals;
      this.change.markForCheck();
    });
  }


 }
