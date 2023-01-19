import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import Button from "../button/Button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addToCart, incrementCart } = useContext(CartContext);

  const handleUpdateCart = () => {
    addToCart(product);
    incrementCart();
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleUpdateCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
