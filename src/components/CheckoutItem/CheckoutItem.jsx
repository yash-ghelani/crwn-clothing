import { useContext } from "react";
import "./checkout-item.scss";
import { CartContext } from "../../contexts/cart";

const CheckoutItem = ({ product }) => {
  const {
    addToCart,
    removeFromCart,
    deleteFromCart,
  } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = product;

  const handleAddItem = () => {
    addToCart(product);
  };

  const handleRemoveItem = () => {
    removeFromCart(product);
  };

  const handleDeleteItem = () => {
    deleteFromCart(product);
  };

  return (
    <>
      <div className="checkout-item-container">
        {/* Image */}
        <div className="checkout-item image">
          <img src={imageUrl} alt={name} />
        </div>

        {/* Name */}
        <span className="checkout-item name">{name}</span>

        {/* Quantity */}
        <div className="checkout-item quantity">
          <span className="arrow" onClick={handleRemoveItem}>
            &#10094;
          </span>
          <span className="value">{quantity}</span>
          <span className="arrow" onClick={handleAddItem}>
            &#10095;
          </span>
        </div>

        {/* Price */}
        <span className="checkout-item price">£{price}</span>

        {/* Remove */}
        <div className="checkout-item remove" onClick={handleDeleteItem}>
          &#10005;
        </div>
      </div>
      <hr />
    </>
  );
};

export default CheckoutItem;
