import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Button, { BUTTON_TYPES } from "../button/Button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addToCart } = useContext(CartContext);

  const handleUpdateCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={handleUpdateCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
