import React from "react";

function LearnMore({ handlePageChange }) {
  return (
    <section id="learnMore">
        <a
        href="#learnMore"
        className="items-center bg-sage text-white hover:bg-white hover:text-sage py-1 px-3 rounded"
        onClick={() => handlePageChange("LearnMore")}
      >
        Learn More
      </a>
    </section>
  );
}

export default LearnMore;