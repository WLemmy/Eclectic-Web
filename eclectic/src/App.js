import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components /Navbar';
import Home from './pages/Home';
import Footer from './components /Footer';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Products from './pages/Products';

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
       
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
