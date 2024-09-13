import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Eclectic Dopetech Solutions
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8">
          Empowering businesses through digital innovation.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At Eclectic Dopetech Solutions, we provide cutting-edge, scalable, and secure technology solutions to help businesses transform in the digital age.
        </p>

        {/* Button to AboutUs page */}
        <Link to="/aboutus">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            More About Eclectic
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
