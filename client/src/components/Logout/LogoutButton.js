import React from "react";

function LogoutButton({ handlePageChange }) {
  // this.state = {
  //   disabled: !Userfront.tokens.accessToken,
  // };

  return (
    <div>
      <a
        href="#landing"
        className="bg-sage hover:bg-white text-white hover:text-sage hover:border hover:border-sage font-light py-1 px-3 m-3 rounded shadow-md"
        onClick={() => handlePageChange("Landing")}
        disabled={this.state.disabled}
      >
        Logout
      </a>
    </div>
  );
}

export default LogoutButton;
