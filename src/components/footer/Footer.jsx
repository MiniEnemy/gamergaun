import Logo from "../../assets/images/nobglogo.png";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-poppins bg-[#0a0c17] text-[#ffffff] pt-6 mt-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Logo and Description */}
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <img src={Logo} alt="SastoBazar" className="h-28 mx-auto md:mx-0 mb-4 md:mb-0" />
        <p className="text-sm text-[#b0b3b8]">Your one-stop shop for all your needs.</p>
      </div>
  
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 w-full md:w-auto">
        <NavLink to="/" className="hover:underline hover:text-orange-500">
          Home
        </NavLink>
        <NavLink to="#" className="hover:underline hover:text-orange-500">
          Shop
        </NavLink>
        <NavLink to="/Aboutus" className="hover:underline hover:text-orange-500">
          About Us
        </NavLink>
        <NavLink to="/Contact" className="hover:underline hover:text-orange-500">
          Contact Us
        </NavLink>
        <NavLink to="/privacy" className="hover:underline hover:text-orange-500">
          Privacy
        </NavLink>
        <NavLink to="/Terms" className="hover:underline hover:text-orange-500">
          Terms & Conditions
        </NavLink>
  
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="text-[#ffffff] hover:text-[#b0b3b8]">
            <FiFacebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="text-[#ffffff] hover:text-[#b0b3b8]">
            <FiTwitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-[#ffffff] hover:text-[#b0b3b8]">
            <FiInstagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-[#ffffff] hover:text-[#b0b3b8]">
            <FiLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  
    {/* Footer Bottom Section */}
    <div className="mt-6 border-t border-[#3a3a3a] pt-4 text-center text-sm">
      <p>&copy; 2024 SastoBazar. All rights reserved.</p>
      <p>
        <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Refund Policy</a>
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
