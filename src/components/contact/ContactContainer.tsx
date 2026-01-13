import ContactForm from './ContactForm';
import ContactMe from './ContactMe';

export default function ContactContainer() {
  return (
    <div className="container">
      <h2 className="container-h2">Contact</h2>
      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <ContactForm />
        <ContactMe />
      </div>
    </div>
  );
}
