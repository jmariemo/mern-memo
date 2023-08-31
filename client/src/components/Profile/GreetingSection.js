import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";
import ContactCreateForm from "./ContactCreateForm";

function GreetingSection() {
  const [show, setShow] = useState(false);

  const { userName: userName } = useParams();
  const { userZipCode: userZipCode } = useParams();

  const { loading, data } = useQuery(userName ? QUERY_USER : QUERY_ME, {
    variables: [{ userName: userName }, { userZipCode: userZipCode }],
  });

  const user = data?.me || data?.user || {};
  // navigate to personal user page if userName is yours
  if (Auth.loggedIn() && Auth.getUser().data.userName === userName) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.userName) {
    return <h4>Please sign up or login to view this page.</h4>;
  }

  return (
    <div
      id="#greetingSection"
      className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green font-display">
        welcome, {userName ? `${user.userName}` : `${user.userName}`}!
      </h1>
      <p className="leading-relaxed">
        Currently shipping from{" "}
        {userZipCode ? `${user.userZipCode}` : `${user.userZipCode}`}.
      </p>
      <button
        className="bg-tangerine hover:bg-white text-white hover:text-tangerine font-light py-1 px-3 m-3 rounded shadow-md"
        onClick={() => setShow(true)}
      >
        Create New Contact
      </button>
      <ContactCreateForm onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default GreetingSection;
