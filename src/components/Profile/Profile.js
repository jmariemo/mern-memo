import MonthSection from "./MonthSection";
import ContactSection from "./ContactSection";
import GreetingSection from "./GreetingSection";

function Profile({ currentPage, handlePageChange }) {
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
}

export default Profile;
