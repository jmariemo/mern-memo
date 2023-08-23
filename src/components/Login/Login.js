import React from "react";
import SignUpButton from "../SignUp/SignUpButton";
import LoginToProfileButton from "./LoginToProfileButton";

function SignUp({ currentPage, handlePageChange }) {
  return (
    <section id="signUp">
      <div class="flex flex-col">
        <div class="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2">
          <div class="px-6 py-8 rounded shadow-md shadow-sage text-black w-full">
            <h1 class="mb-8 text-3xl text-center text-sage">Login</h1>
            <input
              type="text"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <LoginToProfileButton
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>

          <div class="flex text-grey-dark mt-6">
            Need an account?
            <SignUpButton
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
