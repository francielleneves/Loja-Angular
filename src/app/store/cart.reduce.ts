import { createReducer, on } from '@ngrx/store';
import { addProductToCart, removeProductFromCart, clearCart } from './cart.actions';
import { initialState } from './cart.states';
import { CartItem } from '../types';

export const cartReducer = createReducer(
  initialState,

  // ✅ Adiciona produto ao carrinho
  on(addProductToCart, (state, { product }) => {
    const existingItem = state.items.find(item => item.product.id === product.id);
    let updatedItems: CartItem[];

    if (existingItem) {
      updatedItems = state.items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...state.items, { product, quantity: 1 }];
    }

    const total = updatedItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return { ...state, items: updatedItems, total };
  }),

  // ✅ Remove produto do carrinho
  on(removeProductFromCart, (state, { productId }) => {
    const updatedItems = state.items.filter(item => item.product.id !== productId);
    const total = updatedItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    return { ...state, items: updatedItems, total };
  }),

  // ✅ Limpa o carrinho
  on(clearCart, () => initialState)
);
