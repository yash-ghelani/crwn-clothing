import React from "react";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  Spinner,
} from "./button.style";

export const BUTTON_TYPES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
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
