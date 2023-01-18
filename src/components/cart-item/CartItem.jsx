import React from "react";
import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <p> {quantity} </p>
    </div>
  );
};

export default CartItem;
