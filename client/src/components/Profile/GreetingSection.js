import React, { useState } from "react";
import ContactCreateModal from "./contactCreateModal";

function GreetingSection({ currentPage, handlePageChange }) {
  const [show, setShow] = useState(false);

  return (
    <div
      id="#greetingSection"
      className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green font-display">
        welcome, X!
      </h1>
      <p className="leading-relaxed">
        you have X events this month, currently shipping from zipcode.
      </p>
      <button
        className="bg-tangerine hover:bg-white text-white hover:text-tangerine hover:border hover:border-sage font-light py-1 px-3 m-3 rounded shadow-md"
        onClick={() => setShow(true)}
      >
        Create New Contact
      </button>
      <ContactCreateModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default GreetingSection;
