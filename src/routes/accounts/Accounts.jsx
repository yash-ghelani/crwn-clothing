import React from "react";

import SignUpForm from "../../components/sign-up/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";

import './accounts.scss'

const Accounts = () => {
  return (
    <div className="forms-container">
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Accounts;
