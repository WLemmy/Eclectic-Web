import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: slide1,
      text: `We use progressive technology that's been proven and battle-tested.
      We handpicked some of the world’s most reputable technology partners to provide our clients with future-ready platforms that promote innovation, scalability, and security.`,
    },
    {
      image: slide2,
      text: `As a global team, we work from where it works best.
      We are a remote-first company. In our experience, this is the most efficient way to build digital products, allowing each member to work where and when it works best for them and the team.`,
    },
    {
      image: slide3,
      text: `We work the 'Eclectic Way'.
      At the core of our business lies a steadfast belief in our methodology for success, what we call the 'Eclectic Way’. We approach software development as a holistic and collaborative process that encompasses all of our service offerings. This comprehensive approach allows us to tackle even the most complex challenges and consistently deliver quality solutions.`,
    },
  ];

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center p-4 bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content goes here */}
      <div className="relative z-10 max-w-3xl px-4 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Eclectic Dopetech Solutions
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          {slides[currentSlide].text}
        </p>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-20 hover:bg-opacity-90 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-20 hover:bg-opacity-90 transition duration-300"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Home;
