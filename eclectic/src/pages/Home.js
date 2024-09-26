import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import AboutUs from '../components /AboutUs';
import ServicesHome from '../components /Services-home';
import ServiceMain from '../components /ServiceMain';
import Contact from './Contact';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: slide1,
      text: (
        <div>
          <span className="text-yellow-500 text-3xl font-bold md:text-5xl">Lead With Experience, Leap With Intelligence <br /></span>
          <span className="text-2xl md:text-4xl">At Eclectic, we view technology as a catalyst for transformation, deeply rooted in human experience.</span>
        </div>
      ),
    },
    {
      image: slide2,
      text: (
        <div>
          <span className="text-yellow-500 text-3xl font-bold md:text-5xl">As a global team, we work from where it works best.</span>
          <br />
          <span className="text-xl md:text-3xl">We are a remote-first company. In our experience, this is the most efficient way to build digital products.</span>
        </div>
      ),
    },
    {
      image: slide3,
      text: (
        <div>
          <span className="text-yellow-500 text-3xl font-bold md:text-5xl">We work the 'Eclectic Way'.</span>
          <br />
          <span className="text-xl md:text-3xl">At the core of our business lies a steadfast belief in our methodology for success, what we call the 'Eclectic Way’.</span>
        </div>
      ),
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
    <div>
      <div
        className="relative flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh] text-center pt-4 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Background overlay with opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content goes here */}
        <div className="relative z-10 max-w-xl md:max-w-3xl px-4 text-white">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Eclectic Dopetech Solutions
          </h1> */}
          <p className="text-base md:text-lg mb-6">
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

      <AboutUs />
      <ServicesHome />
      <ServiceMain />
      <Contact />
    </div>
  );
}

export default Home;
