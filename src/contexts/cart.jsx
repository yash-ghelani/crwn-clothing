import { createContext, useState } from "react";

// This is the context object
// the fields are simply the useState value and setter
export const CartContext = createContext({
  cart: false,
  setCart: () => {},
});

// This is the provider component
// This component wraps around the top level of the application
// It 'Provides' the object with the state variable and setter
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(false);
  const value = { cart, setCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
