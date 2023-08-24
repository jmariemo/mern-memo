import React from "react";
import LoginButton from "../Login/LoginButton";
import SignUpButton from "../SignUp/SignUpButton";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="flex items-center p-3 md:p-4">
      <SignUpButton
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
      <LoginButton
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
    </div>
  );
}

export default Navbar;
