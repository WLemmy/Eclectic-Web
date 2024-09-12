import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components /Navbar';
import Home from './pages/Home';
import Footer from './components /Footer';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
       
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
