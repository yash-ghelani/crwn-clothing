import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartToggle: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

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
  return cartItems.filter((cartItem) => cartItem.id !== oldProduct.id);
};

// cartSlice

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    toggleCart: (state, action) => {
      state.cartToggle = action.payload;
    },
    addToCart: (state, action) => {
      state.cartItems = handleAddToCart(state.cartItems, action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = handleRemoveFromCart(state.cartItems, action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cartItems = handleDeleteFromCart(state.cartItems, action.payload);
    },
  },
});

export const { toggleCart, addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
