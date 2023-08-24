import React from "react";

function LearnMore() {
  return (
    <section className= "mb-5" id="learnMore">
      <div className="flex flex-col items-center">
        <div className="m-4 pt-6 pb-1 max-w-sm text-xl text-center text-black font-display">
          <a className="text-green">memo</a> reminds you when to send meaningful
          messages & important items.
        </div>
        <ol className="flex flex-col md:flex-row gap-6 m-4 p-4 list-decimal text-l">
            <li className="bg-vanilla rounded shadow-md p-2">memo assigns a ship zone to you, based on your zip code.</li>
            <li className="bg-vanilla rounded shadow-md p-2">you add contacts with shipping addresses and important dates.
            memo will add ship zones to your contacts based on their zip codes.</li>
            <li className="bg-vanilla rounded shadow-md p-2">memo reminds you when to send important items based on the difference between you & your contacts' ship zones.</li>
            <li className="bg-vanilla rounded shadow-md p-2">your items arrive on time! (and your loved ones feel special that you finally remembered them)</li>
        </ol>
      </div>
    </section>
  );
}

export default LearnMore;
