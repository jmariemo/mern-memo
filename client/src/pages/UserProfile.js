import React from 'react';

import MonthSection from "../components/Profile/MonthSection";
import ContactList from "../components/Profile/ContactList";
import GreetingSection from "../components/Profile/GreetingSection";

import Auth from '../utils/auth';

function UserProfile() {
  if (Auth.loggedIn()) {
    return (
      <section id="profile">
        <div className="container flex flex-col md:flex-row px-10 py-20 mx-auto">
          <GreetingSection />
          <div>
            <MonthSection />
            <ContactList contacts={user.contacts}/>
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
