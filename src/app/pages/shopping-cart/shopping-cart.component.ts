import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../store/cart.actions';
import { CartItem } from '../../types';
import { CartState } from '../../store/cart.states';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: Observable<CartItem[]>;

  constructor( private store: Store<{ cart: CartState }>) {
    this.cartItems = this.store.select(state => state.cart.items);
  }

  removeItem(productId: number) {
    this.store.dispatch(CartActions.removeProductFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
