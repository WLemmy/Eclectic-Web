import React from 'react';
import { FaRegLightbulb, FaCode, FaProjectDiagram, FaUser, FaCogs, FaHeadset, FaSearch, FaUsers, FaUserTie } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Digital Transformation',
    description: 'We focus on strategizing how to future-proof your business operations, increase efficiency, and embrace innovation.',
    icon: <FaRegLightbulb className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'We leverage both pro-code and low-code development approaches to build future-ready, scalable software.',
    icon: <FaCode className="text-green-500 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: 'Alignment Discovery',
    description: 'We set your project up for success with a comprehensive methodology for unpacking business needs and requirements.',
    icon: <FaProjectDiagram className="text-purple-500 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: 'User Experience Design',
    description: 'We create human-centric, intuitively designed digital products that drive user engagement and maximize ROI.',
    icon: <FaUser className="text-orange-500 text-4xl mb-4" />,
  },
  {
    id: 5,
    title: 'Agile Delivery',
    description: 'We enable Scrum teams to adapt, collaborate, and continuously deliver value using agile delivery methods.',
    icon: <FaCogs className="text-red-500 text-4xl mb-4" />,
  },
  {
    id: 6,
    title: 'Product Support',
    description: 'We provide expert and comprehensive support packages to ensure the continual success of your software products.',
    icon: <FaHeadset className="text-teal-500 text-4xl mb-4" />,
  },
  {
    id: 7,
    title: 'Business Analysis',
    description: 'We identify and document key business needs and requirements to guide exceptional software development.',
    icon: <FaSearch className="text-indigo-500 text-4xl mb-4" />,
  },
  {
    id: 8,
    title: 'Agile Coaching',
    description: 'We help individuals, teams, and global organizations adopt Scrum and agile frameworks to solve complex problems.',
    icon: <FaUsers className="text-yellow-500 text-4xl mb-4" />,
  },
  {
    id: 9,
    title: 'Talent Solutions',
    description: 'We assist hiring professionals to evaluate technical candidate competencies, skills, and streamline the hiring process.',
    icon: <FaUserTie className="text-gray-500 text-4xl mb-4" />,
  },
];

const Services = () => {
  return (
    <div className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(service => (
            <div
              key={service.id}
              className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center'
            >
              {service.icon}
              <h2 className='text-xl font-semibold mt-4 mb-2'>{service.title}</h2>
              <p className='text-base font-light'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
