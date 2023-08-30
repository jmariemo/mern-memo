import React, { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { saveContactIds, getSavedContactIds } from "../../utils/localStorage";
import { ADD_CONTACT } from "../../utils/mutations";

const ContactCreateForm = (props) => {
  // set initial form state
  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    zipCode: "",
  });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addContact, { error }] = useMutation(ADD_CONTACT);
  // create state to hold saved contactId values
  const [savedContactIds, setSavedContactIds] = useState(getSavedContactIds());

  // set up useEffect hook to save `savedContactIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveContactIds(savedContactIds);
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  if (!props.show) {
    return null;
  }

  const handleSaveContact = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === "false") {
      event.preventDefault();
      event.stopPropagation();
    }

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await addContact({
        variables: { ...contactFormData },
      });

      if (!response.data) {
        throw new Error(
          "Hmm, something's not quite right. Please try to add contact again!"
        );
      }
    } catch (err) {
      console.error(err);
    }

    setContactFormData({
      fullName: "",
      zipCode: "",
    });
  };

  return (
    <form
      className="max-w-full z-30 flex fixed left-0 right-0 top-0 mt-20 bottom-0 items-center justify-center bg-gradient-to-b from-white to-green/40"
      noValidate
      validated={"false"}
      onSubmit={handleSaveContact}
      onClick={props.onClose}
    >
      <div class="flex flex-col">
        <div
          class="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="px-6 py-8 rounded shadow-md shadow-sage text-black w-full bg-white">
            <h1 htmlFor="fullName" class="mb-8 text-3xl text-center text-sage">
              Create Contact
            </h1>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={handleInputChange}
              value={contactFormData.fullName}
              required
              class="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Zip Code"
              name="zipCode"
              onChange={handleInputChange}
              value={contactFormData.zipCode}
              required
              class="block border border-sage w-full p-3 rounded mb-4"
            />
            <button
              disabled={!(contactFormData.fullName && contactFormData.zipCode)}
              type="submit"
              class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Contact
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;
