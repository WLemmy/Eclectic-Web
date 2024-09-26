import React from 'react';
import solutionsImage from '../assets/solutions.svg';
import costEffectiveImage from '../assets/effective.svg';
import productivityImage from '../assets/productivity.svg';
import advantageImage from '../assets/advantage.svg';

function ServicesHome() {
  // Define the services array here
  const services = [
    {
      title: 'Tailored Solutions',
      description:
        'Custom software development offers tailored solutions that are unique to your business. These solutions are built from scratch to cater to your specific business needs and help you achieve your goals more efficiently.',
      image: solutionsImage,
    },
    {
      title: 'Deep Expertise',
      description:
        'We are a multi-skilled team, each member of which is experienced in different fields and different projects. This fact allows us to efficiently solve problems of any complexity level.',
      image: costEffectiveImage,
    },
    {
      title: 'Cooperation Transparency',
      description:
        'Honesty with customers, partners, and employees is one of the guiding principles for us, thanks to which our company can build outstanding products.',
      image: productivityImage,
    },
    {
      title: 'Flexible Approach',
      description:
        'We use an iterative approach to development and can adapt the development process to particular customer needs and capabilities. Our team quickly responds to new requirements and changes.',
      image: advantageImage,
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">The Right Technology Partner</h2>
          <div className="flex items-center justify-center mt-6">
            <p className="max-w-2xl text-center text-gray-600">
              What makes our clients stay with us:
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 transform hover:bg-blue-300 hover:text-white hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;
