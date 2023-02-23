import { useState } from "react";
import { useSelector } from "react-redux";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";

import Button, { BUTTON_TYPES } from "../button/Button";
import { PaymentFormContainer } from "./payment-style";

const Payment = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); paymentHandler();};

  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    console.log(`🚀 ~ file: Payment.jsx:19 ~ paymentHandler ~ e`, e);
    e.preventDefaut();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((response) => response.json());

    console.log(response);

    const client_secret = response.paymentIntent.client_secret;

    console.log(`client_secret`, client_secret);

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
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <Button
        isLoading={isProcessingPayment}
        buttonType={BUTTON_TYPES.base}
        onClick={handleOpen}
      >
        Pay Now
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Card Payment</DialogTitle>
        <DialogContent>
          <CardElement />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Pay</Button>
        </DialogActions>
      </Dialog>
    </PaymentFormContainer>
  );
};

export default Payment;
