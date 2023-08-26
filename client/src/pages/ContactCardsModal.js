import React from "react";

const ContactCardsModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
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
  );
};

export default ContactCardsModal;
