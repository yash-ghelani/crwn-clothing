import { useContext } from "react";
import { Link } from "react-router-dom";
import "./cart-dropdown.scss";
import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-item/CartItem";
import LinkButton from "../button/LinkButton";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <LinkButton link="/checkout" buttonType="inverted">
        Go to checkout
      </LinkButton>
    </div>
  );
};

export default CartDropdown;
