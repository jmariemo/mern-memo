import MonthSection from "../components/Profile/MonthSection";
import ContactSection from "../components/Profile/ContactSection";
import GreetingSection from "../components/Profile/GreetingSection";

function UserProfile() {
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

export default UserProfile;