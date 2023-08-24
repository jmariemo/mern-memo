import React from "react";

function LearnMoreButton({ handlePageChange }) {
  return (
    <div>
      <a
        href="#learnMore"
        className="items-center bg-sage text-white hover:bg-white hover:text-sage hover:border hover:border-sage py-1 px-3 rounded m-3"
        onClick={() => handlePageChange("LearnMore")}
      >
        Learn More
      </a>
    </div>
  );
}

export default LearnMoreButton;
