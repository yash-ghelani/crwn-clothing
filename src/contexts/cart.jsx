import { createContext, useState, useEffect, useReducer } from "react";

// This is the context object
// the fields are simply the useState value and setter
export const CartContext = createContext({
  cartToggle: false,
  toggleCart: () => {},
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

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

export const CART_ACTION_TYPES = {
  UPDATE_CART: "UPDATE_CART",
  TOGGLE_CART: "TOGGLE_CART",
};

const INITIAL_STATE = {
  cartToggle: false,
  cartItems: [
    {
      id: 4,
      name: "Grey Brim",
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      price: 25,
      quantity: 1,
    },
  ],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        cartToggle: payload,
      };

    case CART_ACTION_TYPES.UPDATE_CART:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unexpected action type: ${type} in cartReducer`);
  }
};

// This is the provider component
// This component wraps around the top level of the application
// It 'Provides' the object with the state variable and setter
export const CartProvider = ({ children }) => {
  const [{ cartToggle, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const toggleCart = (flag) => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: flag });
  };

  const updateCart = (newCartItems) => {
    const newCartCount = newCartItems.reduce((count, cartItem) => {
      return count + cartItem.quantity;
    }, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      console.log(total + cartItem.quantity * cartItem.price);
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    return { newCartCount, newCartTotal };
  };

  const updateCartItems = (newCartItems) => {
    const { newCartCount, newCartTotal } = updateCart(newCartItems);
    dispatch({
      type: CART_ACTION_TYPES.UPDATE_CART,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addToCart = (newProduct) => {
    const newCartItems = handleAddToCart(cartItems, newProduct);
    updateCartItems(newCartItems);
    console.log(
      "added item to cart! cartCount: ",
      cartCount,
      "cartTotal: ",
      cartTotal,
      "cartItems: ",
      cartItems
    );
  };

  const removeFromCart = (oldProduct) => {
    const newCartItems = handleRemoveFromCart(cartItems, oldProduct);
    updateCartItems(newCartItems);
    console.log(
      "removed item from cart! cartCount: ",
      cartCount,
      "cartTotal",
      cartTotal
    );
  };

  const deleteFromCart = (oldProduct) => {
    const newCartItems = handleDeleteFromCart(cartItems, oldProduct);
    updateCartItems(newCartItems);
    console.log(
      "deleted item from cart! cartCount: ",
      cartCount,
      "cartTotal",
      cartTotal
    );
  };

  const value = {
    cartToggle,
    toggleCart,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
