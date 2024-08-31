import { NavLink } from "react-router-dom";
import Customer from "../../assets/images/Customer-care.png";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container w-[100%]">

    <div className="up-container w-full mx-auto ">
      <h1 className="text-4xl font-bold text-center  ">Contact Us</h1>
      <h5 className="text-1xl font-normal text-gray-700 shadow-xl w-6/12 mx-auto h-15 rounded-md ">
      Need help? Reach out via the contact form below or contact us by email or phone. We’re available during business hours to assist you.
      </h5>

    </div>
    <div className="mid-container bg-gray-500">
      <div className="box flex">
        <div className="left w-[50%] text-3xl">
          <span className="text-3xl font-bold ">Get in Touch </span>
          <p className="sa text-2xl ">Reach us by email, phone, or the form below. We’re here to help!</p>
          <div className="loc flex">
          <MdLocationPin  /> <span className="ml-2 w-0">Address</span>
        <span className="text-lg mt-5 mr-5">123 Main St, City, ST 12345</span>
          </div>
          <div className="phone flex mt-3">
          <FaPhoneAlt /> <span className="w-100 ml-5 ">Phone Number
          <span className="text-lg mt-20 mr-5">9841266010</span>
          </span>
          </div>

          </div>
        <div className="right ml-5 w-[50%]">as</div>
      </div>
      
    </div>
    </div>
  );
};

export default Contact;
