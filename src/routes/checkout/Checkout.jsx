import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/cart";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-products-container">
      
      <div className="checkout-column-titles">
        <span className="column-title">Product</span>
        <span className="column-title">Description</span>
        <span className="column-title">Quantity</span>
        <span className="column-title">Price</span>
        <span className="column-title">Remove</span>
      </div>

      <hr />

      <div className="checkout-items-container">
        {cartItems.map((product) => (
          <CheckoutItem key={product.id} product={product} />
        ))}
      </div>

      <div className="checkout-total">
        <span className="total">Total: {}</span>
      </div>
    </div>
  );
};

export default Checkout;
