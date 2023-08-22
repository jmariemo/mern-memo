import React from "react";

function Navbar({ handlePageChange }) {
  return (
    <div className="flex">
      <a
        href="#learnMore"
        className="items-center bg-white text-sage hover:bg-sage hover:text-white py-1 px-3 rounded m-3"
        onClick={() => handlePageChange("LearnMore")}
      >
        Learn More
      </a>
      <a
        href="#signUp"
        className="items-center bg-sage hover:bg-white hover:text-sage py-1 px-3 rounded m-3"
        onClick={() => handlePageChange("SignUp")}
      >
        Sign Up
      </a>
      <a
        href="#login"
        className="items-center bg-sage hover:bg-white hover:text-sage py-1 px-3 rounded m-3"
        onClick={() => handlePageChange("Login")}
      >
        Login
      </a>
    </div>
  );
}

export default Navbar;
