import React from "react";
import './button.scss'

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...buttonProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
