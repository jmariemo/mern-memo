import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CONTACT } from "../../utils/mutations";

const ContactCreateModal = (props) => {
  // set initial form state
  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    zipCode: "",
    eventTitle: "",
    eventDate: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addContact, { error }] = useMutation(ADD_CONTACT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };
  
  if (!props.show) {
    return null;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === "false") {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await addContact({
        variables: { ...contactFormData },
      });

      if (!response.data) {
        throw new Error(
          "Hmm, something's not quite right. Please try to create contact again!"
        );
      };
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setContactFormData({
      fullName: "",
      zipCode: "",
      eventTitle: "",
      eventDate: "",
    });
  };

  return (
    <form
      className="flex fixed left-0 right-0 top-0 mt-20 bottom-0 items-center justify-center bg-gradient-to-b from-white to-green/40"
      noValidate
      validated={"false"}
      onSubmit={handleFormSubmit}
      // onClick={props.onClose}
    >
      <div className="flex fixed left-0 right-0 top-0 mt-20 bottom-0 items-center justify-center bg-green/20">
        <div className="w-50 bg-white rounded">
          <div className="p-2.5">
            <h4 className="m-0">Create Contact</h4>
          </div>
          <div className="p-2.5 border border-y-sage">
            <input
              type="text"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="fullName"
              placeholder="Full Name"
            />
            <input
              type="text"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="zipCode"
              placeholder="Zip Code"
            />
            <div className="flex gap-1">
              <input
                type="text"
                class="block border border-sage w-full p-3 rounded mb-4"
                name="eventTitle"
                placeholder="Event Title"
              />
              <input
                type="text"
                class="block border border-sage w-full p-3 rounded mb-4"
                name="eventDate"
                placeholder="Event Date"
              />
            </div>
          </div>
          <div className="p-2.5">
            <button type="submit" className="" onClick={props.onClose}>
              Save Contact
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateModal;
