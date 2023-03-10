import React from "react";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  PaymentButton,
  Spinner,
} from "./button.style";

export const BUTTON_TYPES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
  payment: PaymentButton,
};

const Button = ({
  children,
  isLoading,
  buttonType = BUTTON_TYPES.base,
  ...buttonProps
}) => {
  const CustomButton = buttonType;

  return (
    <CustomButton disabled={isLoading} {...buttonProps}>
      {isLoading ? <Spinner /> : children}
    </CustomButton>
  );
};

export default Button;
