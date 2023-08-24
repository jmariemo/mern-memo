import React from "react";
import LoginButton from "../Login/LoginButton";

function SignUp({ currentPage, handlePageChange }) {
  return (
    <section id="signUp">
      <div class="flex flex-col">
        <div class="container max-w-sm mx-auto mt-2 md:mt-10 mb-10 flex-1 flex flex-col items-center justify-center px-2">
          <div class="px-6 py-8 rounded shadow-md shadow-sage text-black w-full">
            <h1 class="mb-8 text-3xl text-center text-sage">Sign up</h1>
            <input
              type="text"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="fullName"
              placeholder="Full Name"
            />
            <input
              type="text"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="zipCode"
              placeholder="Zip Code"
            />
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
            <input
              type="password"
              class="block border border-sage w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div class="flex text-grey-dark mt-6">
            Already have an account?
            <LoginButton
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
