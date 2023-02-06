import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { CartContainer, CartIcon, ItemCount } from "./cart.style";

const Cart = () => {
  const { cart, setCart, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setCart(!cart)
  }

  return (
    <CartContainer onClick={toggleCart}>
      <CartIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};

export default Cart;
