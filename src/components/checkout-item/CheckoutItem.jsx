import { useDispatch } from "react-redux";

import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "../../store/cart/cart-reducer";

import {
  CheckoutItemContainer,
  Item,
  Remove,
  Arrow,
} from "./checkout-item.style";

const CheckoutItem = ({ product }) => {

  const { imageUrl, name, quantity, price } = product;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(product));
  };

  const handleDeleteItem = () => {
    dispatch(deleteFromCart(product));
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
