import React from "react";

function LoginButton({ handlePageChange }) {
  return (
    <div>
      <a
        href="#login"
        className="bg-sage hover:bg-white text-white hover:text-sage hover:border hover:border-sage font-light py-1 px-3 m-3 rounded shadow-md"
        onClick={() => handlePageChange("Login")}
      >
        Login
      </a>
    </div>
  );
}

export default LoginButton;
