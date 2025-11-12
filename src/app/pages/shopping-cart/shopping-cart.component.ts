import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../store/cart.actions';
import { CartItem } from '../../types';
import { CartState } from '../../store/cart.states';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartItems$ = this.store.select((state) => state.cart.items);
    this.total$ = this.store.select((state) => state.cart.total);
  }

  removeItem(productId: number): void {
    this.store.dispatch(CartActions.removeProductFromCart({ productId }));
  }

  clearCart(): void {
    this.store.dispatch(CartActions.clearCart());
  }

  trackByProduct(index: number, item: CartItem): number {
    return item.product.id;
  }
}
