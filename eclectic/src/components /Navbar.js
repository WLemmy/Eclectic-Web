import React, { useState } from 'react';
import logo from '../assets/navbar-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-300 p-4">
      <div className="flex justify-between items-center mx-4 md:mx-8">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-25 w-40 md:h-25 md:w-60" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-8 hidden md:block ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 w-full md:w-auto bg-blue-300 md:bg-transparent p-4 md:p-0`}>
          <li><Link to="/about" className="block text-white text-lg hover:text-gray-300">About Us</Link></li>
          <li><Link to="/services" className="block text-white text-lg hover:text-gray-300">Services</Link></li>
          <li><Link to="/work" className="block text-white text-lg hover:text-gray-300">Our Work</Link></li>
          <li><Link to="/partners" className="block text-white text-lg hover:text-gray-300">Partners</Link></li>
          <li><Link to="/products" className="block text-white text-lg hover:text-gray-300">Products</Link></li>
          <li><Link to="/insights" className="block text-white text-lg hover:text-gray-300">Insights</Link></li>
          <li><Link to="/contact" className="block text-white text-lg hover:text-gray-300">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
