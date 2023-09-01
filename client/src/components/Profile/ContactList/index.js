import React from "react";
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  if (!contacts.length) {
    return <h3>Get started by adding your first contact</h3>;
  }

  return (
    <div className="flex flex-col md:flex-row text-white mt-3">
      {contacts.map((contact) => (
        <div className="p-2 m-1 bg-tangerine rounded shadow-md">
          <p>{contact.contactName}</p>
          <p>Shipping to {contact.contactZipCode}</p>
          <Link
            className="bg-white hover:bg-tangerine text-tangerine hover:text-white font-light py-1 px-3 m-3 rounded shadow-md"
            to={`/contacts/${contact._id}`}
          >
            Add Event to Contact
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
