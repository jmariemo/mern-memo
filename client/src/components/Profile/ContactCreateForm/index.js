import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_CONTACT } from "../../../utils/mutations";
import { QUERY_CONTACTS, QUERY_ME } from "../../../utils/queries";

const ContactCreateForm = (props) => {
  // set initial form state
  const [contactFormData, setContactFormData] = useState({
    contactName: "",
    contactZipCode: ""
  });

  const [addContact, { error }] = useMutation(ADD_CONTACT, {
    update(cache, { data: { addContact } }) {
      try {
        const { contacts } = cache.readQuery({ query: QUERY_CONTACTS });

        cache.writeQuery({
          query: QUERY_CONTACTS,
          data: { contacts: [addContact, ...contacts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, contacts: [...me.contacts, addContact] } },
      });
    },
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

    try {
      const { data } = await addContact({
        variables: { ...contactFormData },
      });
    } catch (err) {
      console.error(err);
    }

    setContactFormData({
      contactName: "",
      contactZipCode: "",
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
      <div className="flex flex-col">
        <div
          className="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-8 rounded shadow-md shadow-sage text-black w-full bg-white">
            <h1
              htmlFor="contactName"
              className="mb-8 text-3xl text-center text-sage"
            >
              Create Contact
            </h1>
            <input
              type="text"
              placeholder="Full Name"
              name="contactName"
              onChange={handleInputChange}
              value={contactFormData.contactName}
              required
              className="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Zip Code"
              name="contactZipCode"
              onChange={handleInputChange}
              value={contactFormData.contactZipCode}
              required
              className="block border border-sage w-full p-3 rounded mb-4"
            />
            <button
              disabled={
                !(contactFormData.contactName && contactFormData.contactZipCode)
              }
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
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
