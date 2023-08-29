import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);
  if (!props.show) {
    return null;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <section
      className="flex fixed left-0 right-0 top-0 mt-20 bottom-0 items-center justify-center bg-gradient-to-b from-white to-green/40"
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
      onClick={props.onClose}
    >
      {/* <div onClose={() => setShowAlert(false)} show={showAlert}>
        Hmm, something's not quite right. Please try to sign up again
      </div> */}
      <div className="flex flex-col">
        <div
          className="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-8 rounded shadow-md shadow-sage text-black w-full bg-white">
            <h1 htmlFor="email" className="mb-8 text-3xl text-center text-sage">
              Login
            </h1>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
              className="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
              className="block border border-sage w-full p-3 rounded mb-4"
            />
            <button
              type="submit"
              disabled={!(userFormData.email && userFormData.password)}
              onClick={props.onClose}
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
