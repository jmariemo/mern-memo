import React from "react";

function Landing() {
  return (
    <section id="landing">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="mb-2 leading-relaxed ">Anniversaries, birthdays...</h3>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-tangerine font-display">
            memo
            <br className="hidden lg:inline-block" /> helps you remember.
          </h1>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="alarm clock"
            src="./alarm.jpg"
          />
        </div>
      </div>
      <section className="mb-5">
        <div className="flex flex-col items-center">
          <div className="m-4 pt-6 pb-1 max-w-sm text-xl text-center text-black font-display">
            <a className="text-tangerine">memo</a> reminds you when to send
            meaningful messages & important items.
          </div>
          <ol className="flex flex-col md:flex-row gap-6 m-4 p-4 list-decimal text-l">
            <li className="bg-vanilla rounded shadow-md p-2">
              memo assigns a ship zone to you, based on your zip code.
            </li>
            <li className="bg-vanilla rounded shadow-md p-2">
              you add contacts with shipping addresses and important dates. memo
              will add ship zones to your contacts based on their zip codes.
            </li>
            <li className="bg-vanilla rounded shadow-md p-2">
              memo reminds you when to send important items based on the
              difference between you & your contacts' ship zones.
            </li>
            <li className="bg-vanilla rounded shadow-md p-2">
              your items arrive on time! (and your loved ones feel special that
              you finally remembered them)
            </li>
          </ol>
        </div>
      </section>
    </section>
  );
}

export default Landing;
