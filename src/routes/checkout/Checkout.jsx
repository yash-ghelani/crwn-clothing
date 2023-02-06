import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { CartContext } from "../../contexts/cart";
import {
  CheckoutProductsContainer,
  CheckoutColumnTitles,
  ColumnTitle,
  CheckoutTotal,
} from "./checkout.style";


const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutProductsContainer>
      <CheckoutColumnTitles>
        <ColumnTitle>
          <span>Product</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Description</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Quantity</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Price</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Remove</span>
        </ColumnTitle>
      </CheckoutColumnTitles>

      <hr />

      {cartItems.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}

      <CheckoutTotal>
        <span>Total: £{cartTotal}</span>
      </CheckoutTotal>
    </CheckoutProductsContainer>
  );
};

export default Checkout;
