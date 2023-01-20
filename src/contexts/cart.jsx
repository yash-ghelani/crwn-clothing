import { createContext, useState, useEffect } from "react";

// This is the context object
// the fields are simply the useState value and setter
export const CartContext = createContext({
  cart: false,
  setCart: () => {},
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

// This is the provider component
// This component wraps around the top level of the application
// It 'Provides' the object with the state variable and setter
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (newProduct) =>
    setCartItems(handleAddToCart(cartItems, newProduct));

  const removeFromCart = (oldProduct) => {
    setCartItems(handleRemoveFromCart(cartItems, oldProduct));
  };

  const deleteFromCart = (oldProduct) => {
    setCartItems(handleDeleteFromCart(cartItems, oldProduct));
  };

  useEffect(() => {
    setCartCount(
      cartItems.reduce((count, cartItem) => {
        console.log(count + cartItem.quantity);
        return (count + cartItem.quantity);
      }, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((total, cartItem) => {
        console.log(total + cartItem.quantity * cartItem.price);
        return total + cartItem.quantity * cartItem.price;
      }, 0)
    );
  }, [cartItems]);

  const value = {
    cart,
    setCart,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
