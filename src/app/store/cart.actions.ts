import { createAction, props } from '@ngrx/store';
import { Product } from '../types';

export const addProductToCart = createAction(
  '[Product Detail] Add Product to Cart',
  props<{ product: Product }>()
);

export const removeProductFromCart = createAction(
  '[Cart] Remove Product From Cart',
  props<{ productId: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');
