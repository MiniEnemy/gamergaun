import React from 'react';
import { FaViber, FaUser, FaShoppingCart, FaTruck, FaTags } from "react-icons/fa";
import { FaRocket, FaGift } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const TopHeader = (props) => {
  return (
    <>
      <div className="font-poppins py-2 border-b bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-4 flex justify-between items-center">
        {/* Left Section: Customer Support */}
        <div className="flex items-center space-x-4">
          <FaViber className="text-blue-500" />
          <span className="text-sm">Customer Support</span>
        </div>

        {/* Right Section: User Options */}
        <div className="flex items-center space-x-6">
          <NavLink to="/login" className="flex items-center text-sm hover:text-blue-500">
            <FaUser className="mr-1" />
            Login / Register
          </NavLink>
          <a href="#" className="flex items-center text-sm hover:text-blue-500">
            <FaTags className="mr-1" />
            Sell Your Product
          </a>

          <a href="#" className="flex items-center text-sm hover:text-blue-500">
            <FaRocket className="mr-1" />
            New Arrivals
          </a>
          <a href="#" className="flex items-center text-sm hover:text-blue-500">
            <FaGift className="mr-1" />
            {props.title}
          </a>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
