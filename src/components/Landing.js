import React from "react";
import LearnMore from "./LearnMore";

function Landing({ currentPage, handlePageChange }) {
  return(
  <section id="landing">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="mb-8 leading-relaxed ">
          Anniversaries, birthdays...
        </p>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green">
          testing 
          <br className="hidden lg:inline-block" /> helps you remember.
        </h1>
        <LearnMore
            currentPage="Landing"
            handlePageChange={handlePageChange}
          />
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./calendar-placeholder.png"
        />
      </div>
    </div>
  </section>
  );
}

export default Landing;
