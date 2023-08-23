import React from "react";

function SignUpButton({ handlePageChange }) {
  return (
    <div>
      <a
        href="#signUp"
        className="bg-sage hover:bg-white text-white hover:text-sage hover:border hover:border-sage font-light py-1 px-3 m-3 rounded shadow-md"
        onClick={() => handlePageChange("SignUp")}
      >
        Sign Up
      </a>
    </div>
  );
}

export default SignUpButton;
