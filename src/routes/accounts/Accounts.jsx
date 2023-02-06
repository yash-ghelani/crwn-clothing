import React from "react";

import SignUpForm from "../../components/sign-up/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";

import { FormsContainer } from "./accounts.style.jsx";

const Accounts = () => {
  return (
    <FormsContainer>
      <SignInForm />
      <SignUpForm />
    </FormsContainer>
  );
};

export default Accounts;
