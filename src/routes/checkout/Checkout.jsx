import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
  CheckoutProductsContainer,
  CheckoutColumnTitles,
  ColumnTitle,
  CheckoutTotal,
  PaymentButtonContainer,
} from "./checkout.style";
import Payment from "../../components/payment/Payment";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentButtonContainer>
        <Payment />
      </PaymentButtonContainer>
    </CheckoutProductsContainer>
  );
};

export default Checkout;
