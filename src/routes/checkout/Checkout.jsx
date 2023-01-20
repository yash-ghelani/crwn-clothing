import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/cart";
import "./checkout.scss";

const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-products-container">
      <div className="checkout-column-titles">

        <div className="column-title">
          <span>Product</span>
        </div>
        <div className="column-title">
          <span>Description</span>
        </div>
        <div className="column-title">
          <span>Quantity</span>
        </div>
        <div className="column-title">
          <span>Price</span>
        </div>
        <div className="column-title">
          <span>Remove</span>
        </div>
      </div>

      <hr />

      {cartItems.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}

      <div className="checkout-total">
        <span className="total">Total: £{cartTotal} {console.log(cartTotal)}</span>
      </div>
    </div>
  );
};

export default Checkout;
