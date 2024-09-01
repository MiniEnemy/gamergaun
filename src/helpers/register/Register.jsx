import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="font-poppins max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
      <h2 className="text-2xl font-semibold mb-4 box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);"></h2>
      <h2>Create Your Account</h2>
      <input type="text" className="mt-6 px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-black text-sm focus:outline-none focus:ring focus:ring-black-200..." placeholder="Enter your Name"  />
      <input type="email" className="mt-6 px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-black text-sm focus:outline-none focus:ring focus:ring-black-200..." placeholder="Enter your Email"  />
      <input type="text" className="mt-6  px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-black text-sm focus:outline-none focus:ring focus:ring-black-200..." placeholder="Enter Your Address"  />
      <input type="number" className="mt-6  px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-black text-sm focus:outline-none focus:ring focus:ring-black-200..." placeholder="Enter your PhoneNumber"  />
      <input type="password" className="mt-6  px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-black text-sm focus:outline-none focus:ring focus:ring-black-200..." placeholder="Enter your Password"  />
      <input type="password" className="mt-6  px-2 py-3 border border-gray-300 rounded-md w-full focus:ring-black text-sm focus:outline-none focus:ring focus:ring-black-200..." placeholder="Re-Enter your Password"  />
      <button className="mt-9 ml-32 py-2 px-4 bg-indigo-600 text-white  hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 rounded-full">Register</button>
      <span className="my-2 flex justify-center items-center" >Already have an account? <NavLink to="/login" className="text-indigo-600 hover:text-indigo-800 text-decoration-none ">Login</NavLink>   </span>
    
    </div>
  );
};

export default Register;
