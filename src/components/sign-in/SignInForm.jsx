import { useState } from "react";

import {
  signInWithGooglePopup,
  signInWithForm,
  createUser,
} from "../../utils/firebase/firebase";

import Button, { BUTTON_TYPES } from "../button/Button";
import FormInput from "../forminput/FormInput";

import { SignInContainer, FormButtons } from "./signinform.style";

const SignIn = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  // ################ hooks ################

  const [formValues, setFormValues] = useState(defaultValues);
  const { email, password } = formValues;

  // ################ form methods ################

  const resetForm = () => {
    setFormValues(defaultValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // first we let firebase create an authorised user
      await signInWithForm(email, password);

      //reset form
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect email or password");
          break;

        case "auth/user-not-found":
          alert("No user associated with this email address");
          break;

        default:
          console.log(error.message);
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    // add authenticated user to doc + db
    createUser(user);
  };

  // ################ rendering form ################

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormButtons>
          <Button type="submit" buttonType={BUTTON_TYPES.base}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </FormButtons>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
