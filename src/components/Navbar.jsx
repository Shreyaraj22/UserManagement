import { useState } from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../App.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4 shadow-md ">
      <div className="container  flex flex-wrap items-center justify-between mr-auto shadow shadow-none border-none">
        <div className="flex items-center space-x-6 ">
          <NavLink to="/" className="text-xl font-bold">CRUD</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">Home</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-gray-900">About</NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-gray-900">Contact</NavLink>
        </div>
        <button
          className="block lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;