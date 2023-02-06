import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import {
  CheckoutItemContainer,
  Item,
  Remove,
  Arrow,
} from "./checkout-item.style";


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
      <CheckoutItemContainer>
        {/* Image */}
        <Item>
          <img src={imageUrl} alt={name} />
        </Item>

        {/* Name */}
        <Item>{name}</Item>

        {/* Quantity */}
        <Item>
          <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
          <span className="value">{quantity}</span>
          <Arrow onClick={handleAddItem}>&#10095;</Arrow>
        </Item>

        {/* Price */}
        <Item>£{price}</Item>

        {/* Remove */}
        <Remove onClick={handleDeleteItem}>&#10005;</Remove>
      </CheckoutItemContainer>
      <hr />
    </>
  );
};

export default CheckoutItem;
