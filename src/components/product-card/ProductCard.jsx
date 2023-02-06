import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Button, { BUTTON_TYPES } from "../button/Button";
import { ProductCardContainer, ProductFooter, ProductName, ProductPrice } from "./product-card.style";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addToCart } = useContext(CartContext);

  const handleUpdateCart = () => {
    addToCart(product);
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
