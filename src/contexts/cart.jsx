import { createContext, useState } from "react";

// This is the context object
// the fields are simply the useState value and setter
export const CartContext = createContext({
  cart: false,
  setCart: () => {},
  cartItems: [],
  addToCart: () => {},
  incrementCart: () => {},
});

const checkCart = (cartItems, newProduct) => {
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

// This is the provider component
// This component wraps around the top level of the application
// It 'Provides' the object with the state variable and setter
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (newProduct) =>
    setCartItems(checkCart(cartItems, newProduct));

  const incrementCart = () => setCartCount(cartCount + 1);

  const value = { cart, setCart, cartItems, addToCart, incrementCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
