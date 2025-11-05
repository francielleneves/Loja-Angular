import { createAction, props } from "@ngrx/store";

export const addProductToCart = createAction(
  '[Product Detail] Add Product To Cart',
  props<{ product: any }>()
);