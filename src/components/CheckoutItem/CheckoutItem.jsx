import React from "react";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;

  const handleRemoveItem = () => {};

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <span className="checkout-item-name">{name}</span>
      <span className="checkout-item-quantity">{quantity}</span>
      <span className="checkout-item-price">{price}</span>
      <button
        type="button"
        className="remove-checkout-item"
        onClick={handleRemoveItem}
      >
        X
      </button>

      <hr />
    </div>
  );
};

export default CheckoutItem;
