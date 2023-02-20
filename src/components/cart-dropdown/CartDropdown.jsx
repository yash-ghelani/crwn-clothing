import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleCart } from "../../store/cart/cart-reducer";
import { selectCartItems } from "../../store/cart/cart-selector";

import CartItem from "../cart-item/CartItem";
import { BUTTON_TYPES } from "../button/Button";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CheckoutButton,
} from "./cart-dropdown.style";

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    dispatch(toggleCart(false));
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage> Your cart is empty </EmptyMessage>
        )}
      </CartItems>
      <CheckoutButton
        buttonType={BUTTON_TYPES.base}
        onClick={handleGoToCheckout}
      >
        Go to checkout
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
