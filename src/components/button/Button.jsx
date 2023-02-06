import React from "react";
import { BaseButton, InvertedButton, GoogleSignInButton } from "./button.style";

export const BUTTON_TYPES = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
}


const Button = ({ children, buttonType = BUTTON_TYPES.base, ...buttonProps }) => {

  const CustomButton = buttonType;

  return <CustomButton {...buttonProps}>{children}</CustomButton>;
};

export default Button;
