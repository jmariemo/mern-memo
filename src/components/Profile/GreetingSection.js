import React from "react";

function GreetingSection({ currentPage, handlePageChange }) {
  return (
        <div id="#greetingSection" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green font-display">
            welcome, X!
          </h1>
          <p className="leading-relaxed">
            you have X events this month, currently shipping from zipcode.
          </p>
        </div>
  );
}

export default GreetingSection;
