import React from "react";
import {
  signInWithGooglePopup,
  createUser,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/signup/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUser(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1> Sign in page </h1>
      <button onClick={logGoogleUser}> Sign in with Google </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
