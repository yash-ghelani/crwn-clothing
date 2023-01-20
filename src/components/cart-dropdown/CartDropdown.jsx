import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.scss";
import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

const CartDropdown = () => {
  const { cartItems, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    setCart(false)
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
