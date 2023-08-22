import React from "react";

function SignUp() {
  return (
    <section id="signUp">
      <div className="container mx-auto flex justify-around px-10 py-20 mb-40 md:flex-row flex-col items-center">
        <div className="bg-blue shadow-inner p-3 rounded md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="font-serif sm:text-4xl text-xl mb-4 font-medium text-gray-600">
            Hi, I'm Jennifer.
          </h1>
          <p className="mb-8 text-teal-950 font-serif">
            When technology moves fast, I find respite in craft work.
            <br />I work to share the stories of jewelers, chefs, and ateliers alike.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;