import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.states';

export const selectCartState = createFeatureSelector<CartState>('cart');


export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

export const selectCartTotal = createSelector(
  selectCartState,
  (state) => state.total
);

export const selectCartCount = createSelector(
  selectCartState,
  (state) => state.items.reduce((count, item) => count + item.quantity, 0)
);
