import React from "react";

import MonthSection from "../components/Profile/MonthSection";
import ContactList from "../components/Profile/ContactList";
import GreetingSection from "../components/Profile/GreetingSection";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

function UserProfile() {
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
  if (Auth.loggedIn()) {
    return (
      <section id="profile">
        <div className="container flex flex-col md:flex-row px-10 py-20 mx-auto">
          <GreetingSection/>
          <div>
            <MonthSection />
            <ContactList contacts={user.contacts} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="flex justify-center m-40 p-20">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-tangerine">
          Please log in to view profile.
        </h1>
      </div>
    );
  }
}

export default UserProfile;
