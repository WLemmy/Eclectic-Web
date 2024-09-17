import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components /Navbar';
import Home from './pages/Home';
import Footer from './components /Footer';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ServicesHome from './components /Services-home';
import FAQ from './components /FAQ';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services-home" element={<ServicesHome />} />
        <Route path="/faq" element={<FAQ />} />
       
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
