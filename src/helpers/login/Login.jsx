import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify"; // Use 'toast' instead of 'Toast'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginValue),
      };

      const res = await fetch('http://httpbin.org/post', config); // Include 'config' in the fetch request

      if (res.ok) {
        toast.success("Successfully logged in");
      } else {
        toast.error("Failed to login");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <span>Please enter your valid credentials</span>
        <form onSubmit={handleSubmit} className="mt-8">
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
              value={loginValue.email}
              onChange={handleChange}
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
              value={loginValue.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <span className="my-2 flex justify-center items-center">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-indigo-600 hover:text-indigo-800 text-decoration-none ml-1">
              Register
            </NavLink>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
