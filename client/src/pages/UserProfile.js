import Auth from "../utils/auth";
import MonthSection from "../components/Profile/MonthSection";
import ContactSection from "../components/Profile/ContactSection";
import GreetingSection from "../components/Profile/GreetingSection";
import ContactCreateModal from "../components/Profile/contactCreateModal";



function UserProfile() {
  if (Auth.loggedIn()) {
    return (
      <section id="profile">
        <div className="container flex flex-col md:flex-row px-10 py-20 mx-auto">
          <GreetingSection />
          <div>
            <MonthSection />
            <ContactSection />
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
