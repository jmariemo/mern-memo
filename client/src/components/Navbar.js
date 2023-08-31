import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const AppNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex flex-col md:flex-row pt-2 pb-6 items-center md:justify-between bg-gradient-to-b from-green to-white text-white">
        <div className="flex flex-col items-center md:flex-row md:items-end">
          <a className="text-2xl md:p-2 font-display" href="/">
            memo
          </a>
          <p className="text-lg md:border-l-2 md:p-2 font-light">
            don't forget!
          </p>
        </div>
        <div>
          <div className="flex items-center p-3 md:p-4">
            {/* if user is logged in show button for logout, if user not logged in show button for login/signup */}
            {Auth.loggedIn() ? (
              <>
                <button
                  className="bg-sage hover:bg-white text-white hover:text-sage border-sage font-light py-1 px-3 m-3 rounded shadow-md"
                  onClick={Auth.logout}
                >
                  Logout
                </button>
                <a
                  className="bg-tangerine hover:bg-white text-white hover:text-tangerine border-tangerine font-light py-1 px-3 m-3 rounded shadow-md"
                  href="/profile"
                >
                  Profile
                </a>
              </>
            ) : (
              <div>
                <button
                  className="bg-sage hover:bg-white text-white hover:text-sage border-sage font-light py-1 px-3 m-3 rounded shadow-md"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
                <button
                  className="bg-sage hover:bg-white text-white hover:text-sage border-sage font-light py-1 px-3 m-3 rounded shadow-md"
                  onClick={() => setShowSignup(true)}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        show={showLogin}
        onHide={() => setShowLogin(false)}
        aria-labelledby="login-modal"
      >
        <div>
          <LoginForm onClose={() => setShowLogin(false)} show={showLogin} />
        </div>
      </div>
      <div
        show={showSignup}
        onHide={() => setShowSignup(false)}
        aria-labelledby="signup-modal"
      >
        <div>
          <SignUpForm onClose={() => setShowSignup(false)} show={showSignup} />
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
