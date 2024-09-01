import { NavLink } from "react-router-dom";
import Customer from "../../assets/images/Customer-care.png";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container w-[100%]">

    <div className="up-container w-full mx-auto ">
      <h1 className="text-4xl font-bold text-center  ">Contact Us</h1>
      <h5 className="text-1xl font-normal text-gray-700 shadow-xl w-6/12 mx-auto h-15 rounded-md ">
      Need help? Reach out via the contact form below or contact us by email or phone. We’re available during business hours to assist you.
      </h5>

    </div>
    <div className="mid-container bg-gray-200">
      <div className="box flex font-serif">
        <div className="left w-[50%] text-3xl">
          <span className="text-3xl font-bold ">Get in Touch </span>
          <p className="sa text-2xl ">Reach us by email, phone, or the form below. We’re here to help!</p>
          <div className="loc flex ">
          <MdLocationPin className="mt-2" /> <span className="ml-2 w-0">Address</span>
        <p className="text-lg mt-10">123 Main St, City, ST 12345</p>
          </div>
          <div className="phone flex mt-3">
          <FaPhoneAlt className="img mt-2"/> <span className="w-100 ml-5 ">Phone Number
          <p className="text-lg mt-1 mr-5">9841266010</p>
          </span>
          </div>
          <div className="phone flex mt-3">
          <MdEmail className="img mt-2"/> <span className="w-100 ml-5 ">E-Mail
          <p className="text-lg mt-1 mr-5">GamerGaun@gmail.com</p>
          </span>
          </div>

          </div>
        <div className="right ml-5 w-[50%]">
          <div className="box shadow-2xl "></div>

        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Contact;
