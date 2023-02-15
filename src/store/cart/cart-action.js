import { CART_ACTION_TYPES } from "./cart-types";

// Helper functions

const handleAddToCart = (cartItems, newProduct) => {
  let flag = false;

  const updatedCart = cartItems.map((cartItem) => {
    if (cartItem.id === newProduct.id) {
      flag = true;
      cartItem["quantity"] += 1;
    }
    return cartItem;
  });

  return flag ? updatedCart : [...cartItems, { ...newProduct, quantity: 1 }];
};

const handleRemoveFromCart = (cartItems, oldProduct) => {
  return cartItems
    .map((cartItem) => {
      if (cartItem.id === oldProduct.id) {
        if (cartItem.quantity > 1) {
          cartItem["quantity"] -= 1;
        } else {
          return null;
        }
      }
      return cartItem;
    })
    .filter((cartItem) => cartItem !== null);
};

const handleDeleteFromCart = (cartItems, oldProduct) => {
  return cartItems.filter((cartItem) => cartItem !== oldProduct);
};

// actions

export const toggleCart = (flag) => {
  return { type: CART_ACTION_TYPES.TOGGLE_CART, payload: flag };
};

export const addToCart = (cartItems, newProduct) => {
  const newCartItems = handleAddToCart(cartItems, newProduct);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeFromCart = (cartItems, oldProduct) => {
  const newCartItems = handleRemoveFromCart(cartItems, oldProduct);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const deleteFromCart = (cartItems, oldProduct) => {
  const newCartItems = handleDeleteFromCart(cartItems, oldProduct);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
