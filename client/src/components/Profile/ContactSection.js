import { contactData } from "./contactData";

function ContactSection() {
  return (
      <div className="flex flex-col md:flex-row text-white mt-3">
          {contactData.map((contact) => (
            <div className="p-2 m-1 bg-tangerine rounded shadow-md">
                <p>{contact.firstName} {contact.lastName}</p>
                <p>has {contact.events.event.type} on {contact.events.event.date}</p>
                <p>Shipping to {contact.zipCode}</p>
            </div>
          ))}
      </div>
  );
}

export default ContactSection;
