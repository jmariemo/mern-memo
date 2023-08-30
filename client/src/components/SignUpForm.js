import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUpForm = (props) => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    userName: "",
    zipCode: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  if (!props.show) {
    return null;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === "false") {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await addUser({
        variables: { ...userFormData },
      });

      if (!response.data) {
        throw new Error(
          "Hmm, something's not quite right. Please try to sign up again!"
        );
      }

      Auth.login(response.data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      userName: "",
      zipCode: "",
      email: "",
      password: "",
    });
  };

  

  return (
    <form
      className="flex fixed left-0 right-0 top-0 mt-20 bottom-0 items-center justify-center bg-gradient-to-b from-white to-green/40"
      noValidate
      validated={"false"}
      onSubmit={handleFormSubmit}
      onClick={props.onClose}
    >
      <div class="flex flex-col">
        <div
          class="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="px-6 py-8 rounded shadow-md shadow-sage text-black w-full bg-white">
            <h1 htmlFor="username" class="mb-8 text-3xl text-center text-sage">
              Sign Up
            </h1>
            <input
              type="text"
              placeholder="Username"
              name="userName"
              onChange={handleInputChange}
              value={userFormData.userName}
              required
              class="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Zip Code"
              name="zipCode"
              onChange={handleInputChange}
              value={userFormData.zipCode}
              required
              class="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
              class="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
              class="block border border-sage w-full p-3 rounded mb-4"
            />
            <button
              disabled={
                !(
                  userFormData.userName &&
                  userFormData.zipCode &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
              class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;

