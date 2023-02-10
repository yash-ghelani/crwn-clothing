import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { CartContainer, CartIcon, ItemCount } from "./cart.style";

const Cart = () => {
  const { cartToggle, toggleCart, cartCount } = useContext(CartContext);

  const handleToggleCart = () => {
    toggleCart(!cartToggle)
  }

  return (
    <CartContainer onClick={handleToggleCart}>
      <CartIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};

export default Cart;
