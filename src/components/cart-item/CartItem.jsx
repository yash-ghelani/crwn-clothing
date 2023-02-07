import React from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>{quantity} X £{price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
