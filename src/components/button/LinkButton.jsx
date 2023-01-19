import React from "react";
import { Link } from "react-router-dom";
import "./link-button.scss";

const BUTTON_TYPES = {
  inverted: "inverted",
};

const LinkButton = ({ children, link, buttonType, ...buttonProps }) => {
  return (
    <Link
      to={`${link}`}
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
