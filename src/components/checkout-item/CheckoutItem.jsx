import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

import {
  CheckoutItemContainer,
  Item,
  Remove,
  Arrow,
} from "./checkout-item.style";

const CheckoutItem = ({ product }) => {

  const { imageUrl, name, quantity, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddItem = () => {
    dispatch(addToCart(cartItems, product));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(cartItems, product));
  };

  const handleDeleteItem = () => {
    dispatch(deleteFromCart(cartItems, product));
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
