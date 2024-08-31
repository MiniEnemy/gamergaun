import { NavLink } from "react-router-dom";
import Customer from "../../assets/images/Customer-care.png";

const Contact = () => {
  return (
    <div className="container w-[100%]">

    <div className="up-container w-full mx-auto">
      <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      <h5 className="text-1xl font-normal text-gray-700 shadow-xl w-8/12 mx-auto h-15 rounded-md ">
        Have questions or need assistance? We are here to help! Feel free to reach out to us via the contact form below, or get in touch through our email and phone. Our team is available during business hours to provide support.
      </h5>
    </div>
    <div className="mid-container bg-gray-500">
      <div className="box flex">
        <div className="left w-[50%]">s</div>
        <div className="right ml-5 w-[50%]">as</div>
      </div>
      
    </div>
    </div>
  );
};

export default Contact;
