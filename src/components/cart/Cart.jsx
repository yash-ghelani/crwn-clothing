import { useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart";
import "./cart.scss";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const toggleCart = () => {
    setCart(!cart)
  }

  return (
    <div className="cart-container" onClick={toggleCart}>
      <CartIcon className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;
