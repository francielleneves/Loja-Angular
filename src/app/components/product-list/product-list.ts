import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { ProductDetail } from '../product-detail/product-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductDetail],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: any[] = [];
  selectedProduct: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
  } 
}
