import React from 'react';
import logo from '../assets/navbar-logo.png';
import { Link } from 'react-router-dom/dist';

function Navbar() {
  return (
    <nav className="bg-blue-300 p-2 ">
      <div className="flex justify-between items-center ml-8 mr-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-25 w-60 mr-8" />
        </div>
        <ul className="flex space-x-8 ">
          <li>< Link to ="/about" className="text-white text-lg hover:text-gray-300">Home</Link></li>
          <li>< Link to ="/about" className="text-white text-lg hover:text-gray-300">About Us</Link></li>
          <li>< Link to ="/services" className="text-white text-lg hover:text-gray-300">Services</Link></li>
          <li><Link Link to ="/work" className="text-white text-lg hover:text-gray-300">Our Work</Link></li>
          <li><Link Link to ="/partners" className="text-white text-lg hover:text-gray-300">Partners</Link></li>
          <li><Link Link to ="/careers" className="text-white text-lg hover:text-gray-300">Products</Link></li>
          <li><Link Link to ="/insights" className="text-white text-lg hover:text-gray-300">Insights</Link></li>
          <li><Link Link to ="/contact" className="text-white text-lg hover:text-gray-300">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;