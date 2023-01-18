import { useState } from "react";
import { createUser, createUserWithForm } from "../../utils/firebase/firebase";

import Button from "../button/Button";
import FormInput from "../forminput/FormInput";
import "./signupform.scss";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {

  // ################ hooks ################

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  // ################ form methods ################

  const resetForm = () => {
    setFormValues(defaultFormValues);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // first we let firebase create an authorised user
      const { user } = await createUserWithForm(email, password);

      // then we add to document and store in the db
      // append form data we have collected passing any missing info we want
      await createUser(user, { displayName });

      //reset form
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;

        default:
          alert("Error creating user with email and password");
          console.log(
            "Error creating user with email and password",
            error.message
          );
          break;
      }
    }
  };

  // ################ rendering form ################

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
