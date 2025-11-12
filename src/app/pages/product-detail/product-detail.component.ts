import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/cart.actions';
import { CartState } from '../../store/cart.states';
import { Product } from '../../types';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  isZoomed = false;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private store: Store<{ cart: CartState }>
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<Product>(`https://fakestoreapi.com/products/${id}`).subscribe({
      next: (res) => {
        this.product = {
          id: res.id,
          title: res.title,
          description: res.description,
          price: Number(res.price),
          image: res.image,
        };
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produto:', err);
        this.loading = false;
      },
    });
  }

  addToCart(): void {
    if (!this.product) return;
    this.store.dispatch(CartActions.addProductToCart({ product: this.product }));
    alert(`✅ ${this.product.title} foi adicionado ao carrinho!`);
  }
}
