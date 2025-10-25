import { Component, Input, OnChanges,SimpleChange, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  imports: [ CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnChanges, OnDestroy {
  @Input() product: any;

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['product']) {
        console.log("Produto Mudou!", changes['product']);
      }
  }

  ngOnDestroy(): void {
    console.log("Componente destruído!");
  }

}
