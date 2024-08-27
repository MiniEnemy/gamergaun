import React from "react";
import { NavLink } from 'react-router-dom';


const Login = () => {
  return (
    <>
      <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <span>Please enter your valid credentials</span>
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-indigo-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-indigo-500 text-sm"
            />
          </div>
          <div className="mt-4">
            <button className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500">
              Login
            </button>
          </div>
          <span className="my-2 flex justify-center items-center">Don't have an account? 
            <NavLink to="/register" className="text-indigo-600 hover:text-indigo-800 text-decoration-none ">Register</NavLink>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
