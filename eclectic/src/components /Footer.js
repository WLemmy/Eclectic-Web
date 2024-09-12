import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);

    const openLoginModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <footer className="bg-blue-100 text-gray-800 py-8 mt-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <Link to="/" className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">Eclectic Dopetech Solutions</h1>
                    </Link>
                    
                    <div className="flex space-x-4 justify-center md:justify-end">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                            <FaYoutube className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                            <FaFacebook className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                <hr className="my-8 border-t-2 border-gray-300" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="footer-col flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Our Company</h2>
                        <div className="flex flex-col space-y-2">
                            <Link to="/about" className="text-gray-700 hover:text-blue-500 hover:underline">About Us</Link>
                            <Link to="/products" className="text-gray-700 hover:text-blue-500 hover:underline">Products</Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-500 hover:underline">Contact Us</Link>
                            <Link to="/privacy" className="text-gray-700 hover:text-blue-500 hover:underline">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="footer-col flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Customer Care</h2>
                        <div className="flex flex-col space-y-2">
                            <Link to="/delivery" className="text-gray-700 hover:text-blue-500 hover:underline">Book a Consultation</Link>
                            <Link to="/delivery" className="text-gray-700 hover:text-blue-500 hover:underline">Delivery & Returns</Link>
                            <Link to="/faqs" className="text-gray-700 hover:text-blue-500 hover:underline">FAQs</Link>
                        </div>
                    </div>
                    <div className="footer-col flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Payment Methods</h2>
                        <div className="flex flex-col space-y-2">
                            <Link to="/mpesa" className="text-gray-700 hover:text-blue-500 hover:underline">Mpesa</Link>
                            <Link to="/paypal" className="text-gray-700 hover:text-blue-500 hover:underline">Paypal</Link>
                            <Link to="/payless" className="text-gray-700 hover:text-blue-500 hover:underline">Payless</Link>
                        </div>
                    </div>
                    <div className="footer-col flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Contact Us</h2>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="text-blue-400" />
                                <p className="text-gray-700">LANGATA ROAD, BUILDING: MARULA KAREN</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-blue-400" />
                                <p className="text-gray-700">+254722 528 240</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaEnvelope className="text-blue-400" />
                                <p className="text-gray-700">info@eclectic-ds.com</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div>
                   <hr className="my-8 border-t-2 border-gray-300 w-100" />
                   </div>
                    <div className='flex items-center justify-center'>
                    <p className="text-gray-600 font-medium text-center mb-4 md:mb-0">
                        © 2024 EClectic Dopetch Solutions. All Rights Reversed.
                    </p>
                    </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <div className="bg-white rounded-lg w-[500px] p-6">
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold mb-4">You need to log in</h3>
                            <p className="text-center mb-4">Please log in to access your account.</p>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2"
                                onClick={() => navigate("/login")}
                            >
                                Log In
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-500 text-white py-2 px-4 rounded"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;