import React from "react";
import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="cost">{quantity} X £{price}</span>
      </div>
    </div>
  );
};

export default CartItem;
