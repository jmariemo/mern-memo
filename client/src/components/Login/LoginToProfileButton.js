import React from "react";

function LoginToProfileButton({ handlePageChange }) {
  return (
    <a href="#profile">
      <button
        class="w-full text-center py-3 my-1 rounded bg-green text-white hover:bg-sage shadow-md"
        onClick={() => handlePageChange("Profile")}
      >
        Login
      </button>
    </a>
  );
}

export default LoginToProfileButton;
