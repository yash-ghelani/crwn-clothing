import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../store/cart/cart-reducer";
import { selectCartCount, selectCartToggle } from "../../store/cart/cart-selector";

import { CartContainer, CartIcon, ItemCount } from "./cart.style";

const Cart = () => {

  const dispatch = useDispatch();
  const cartToggle = useSelector(selectCartToggle);
  const cartCount = useSelector(selectCartCount);

  const handleToggleCart = () => {
    dispatch(toggleCart(!cartToggle))
  }

  return (
    <CartContainer onClick={handleToggleCart}>
      <CartIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};

export default Cart;
