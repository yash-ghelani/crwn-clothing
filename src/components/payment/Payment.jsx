import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";

import Button, { BUTTON_TYPES } from "../button/Button";
import { PaymentFormContainer } from "./payment-style";

const Payment = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or Elements are not ready.");
      return;
    }

    setIsProcessingPayment(true);

    console.log("Reaches here okay 0");

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((response) => response.json());

    const client_secret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(`Payment Failed: ${paymentResult.error.message}`);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      handleClose();
      alert("Payment successful!");
    } else {
      alert("Payment failed!");
    }
  };

  return (
    <PaymentFormContainer>
      <Button buttonType={BUTTON_TYPES.base} onClick={handleOpen}>
        Pay Now
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Card Payment</DialogTitle>
        <DialogContent>
          <CardElement />
        </DialogContent>
        <DialogActions>
          <Button buttonType={BUTTON_TYPES.payment} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            buttonType={BUTTON_TYPES.payment}
            isLoading={isProcessingPayment}
            onClick={paymentHandler}
          >
            Pay
          </Button>
        </DialogActions>
      </Dialog>
    </PaymentFormContainer>
  );
};

export default Payment;
