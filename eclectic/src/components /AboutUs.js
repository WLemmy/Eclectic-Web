import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from '../assets/aboutUs.jpg'; // Assuming the image is in the same directory

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[50vh] bg-gray-100 py-12 px-6">
      {/* Image Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 ">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 max-w-3xl text-center lg:text-left p-6">
        {/* Heading */}
        <h1 className="text-xl font-bold text-yellow-500 mb-6">
          MAXIMIZE EFFICIENCY, MINIMIZE HASSLE
        </h1>

        {/* Subheading */}
        <p className="text-4xl text-gray-600 mb-8">
          Managed IT Solutions
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At Eclectic Dopetech Solutions, we provide cutting-edge, scalable, and secure technology solutions to help businesses transform in the digital age.
        </p>

        {/* New Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We approach software development as a holistic and collaborative process that encompasses all of our service offerings. 
          This comprehensive approach allows us to tackle even the most complex challenges and consistently deliver quality solutions.
        </p>

        {/* Button to AboutUs page */}
        <Link to="/about">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Get To Know Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
