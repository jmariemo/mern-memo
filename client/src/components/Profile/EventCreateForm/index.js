import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_EVENT } from "../../../utils/mutations";
import { QUERY_CONTACTS, QUERY_ME } from "../../../utils/queries";

const EventCreateForm = (props, { contactId }) => {
  const [eventFormData, setEventFormData] = useState({
    eventName: "",
    eventDate: "",
  });

  const [addEvent] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        const { events } = cache.readQuery({ query: QUERY_CONTACTS });

        cache.writeQuery({
          query: QUERY_CONTACTS,
          data: { events: [addEvent, ...events] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, events: [...me.events, addEvent] } },
      });
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventFormData({ ...eventFormData, [name]: value });
  };

  if (!props.show) {
    return null;
  }

  const handleSaveEvent = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEvent({
        variables: { ...eventFormData },
      });
    } catch (err) {
      console.error(err);
    }

    setEventFormData({
      contactName: "",
      contactZipCode: "",
    });
  };

  return (
    <form
      className="max-w-full z-30 flex fixed left-0 right-0 top-0 mt-20 bottom-0 items-center justify-center bg-gradient-to-b from-white to-green/40"
      noValidate
      validated={"false"}
      onSubmit={handleSaveEvent}
      onClick={props.onClose}
    >
      <div className="flex flex-col">
        <div
          className="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-8 rounded shadow-md shadow-sage text-black w-full bg-white">
            <h1
              htmlFor="eventName"
              className="mb-8 text-3xl text-center text-sage"
            >
              Add Event to Contact
            </h1>
            <input
              type="text"
              placeholder="What's the occasion?"
              name="eventName"
              onChange={handleInputChange}
              value={eventFormData.eventName}
              required
              className="block border border-sage w-full p-3 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Date of Event"
              name="contactZipCode"
              onChange={handleInputChange}
              value={eventFormData.eventDate}
              required
              className="block border border-sage w-full p-3 rounded mb-4"
            />
            <button
              disabled={!(eventFormData.eventName && eventFormData.eventDate)}
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Save Event
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EventCreateForm;
