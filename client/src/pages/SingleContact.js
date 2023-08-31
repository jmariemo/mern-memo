import React, { useState } from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import EventList from "../components/Profile/EventList";
import EventCreateForm from "../components/Profile/EventCreateForm";

import { QUERY_SINGLE_CONTACT } from "../utils/queries";

const SingleContact = () => {
  const [show, setShow] = useState(false);

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { contactId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_CONTACT, {
    // pass URL parameter
    variables: { contactId: contactId },
  });

  const contact = data?.contact || {};

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {contact.contactName} <br />
        <span style={{ fontSize: "1rem" }}>{contact.contactZipCode}</span>
      </h3>

      <div className="my-5">
        <EventList comments={contact.events} />
      </div>
      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <EventCreateForm
          onClose={() => setShow(false)}
          show={show}
          contactId={contact._id}
        />
      </div>
    </div>
  );
};

export default SingleContact;
