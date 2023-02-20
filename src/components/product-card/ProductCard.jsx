import { useDispatch } from "react-redux";

import { addToCart } from "../../store/cart/cart-reducer";

import Button, { BUTTON_TYPES } from "../button/Button";
import {
  ProductCardContainer,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./product-card.style";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const dispatch  = useDispatch();

  const handleUpdateCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPES.base} onClick={handleUpdateCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
