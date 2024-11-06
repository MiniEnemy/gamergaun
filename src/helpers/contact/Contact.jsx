import { NavLink } from "react-router-dom";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-start">
    <Icon className="text-3xl text-orange-500 mt-1" />
    <div className="ml-4">
      <h3 className="text-2xl font-medium text-gray-800">{title}</h3>
      <p className="text-lg mt-1 text-gray-600">{content}</p>
    </div>
  </div>
);

const ContactForm = () => (
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input 
        type="text" 
        placeholder="First Name" 
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
      />
    </div>
    <input 
      type="email" 
      placeholder="Email Address" 
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
    />
    <textarea 
      placeholder="Your Message" 
      rows={4} 
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
    />
    <button 
      type="submit" 
      className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
    >
      Send Message
    </button>
  </form>
);

const Contact = () => {
  const contactDetails = [
    { icon: MdLocationPin, title: "Address", content: "Newroad, Bishal Bazzar" },
    { icon: FaPhoneAlt, title: "Phone Number", content: "9841266010" },
    { icon: MdEmail, title: "E-Mail", content: "GamerGaun@gmail.com" },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <div className="text-xl text-gray-700 shadow-lg max-w-4xl mx-auto rounded-full px-8 py-5 leading-relaxed text-center bg-white">
          Need help? Reach out via the contact form below or contact us by email or phone. 
          We're available during business hours to assist you.
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-100 mt-4 p-8 min-h-[75vh] rounded-t-3xl">

        <div className="flex flex-wrap gap-12">
          {/* Left Column - Contact Information */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <p className="text-xl mb-8 text-gray-600">
              Reach us by email, phone, or the form below. We're here to help!
            </p>
            
            <div className="space-y-8">
              {contactDetails.map((detail, index) => (
                <ContactInfo key={index} {...detail} />
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 min-w-[300px]">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;