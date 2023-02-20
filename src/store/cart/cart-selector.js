import { createSelector } from "reselect";

const selectCartState = (state) => state.cart_state;

export const selectCartToggle = createSelector(
  [selectCartState],
  (cart_state) => cart_state.cartToggle
);

export const selectCartItems = createSelector(
  [selectCartState],
  (cart_state) => cart_state.cartItems
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((count, cartItem) => {
    return count + cartItem.quantity
  }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)
);
