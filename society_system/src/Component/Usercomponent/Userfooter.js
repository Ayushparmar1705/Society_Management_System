import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ Ensures icons load

export default function Userfooter() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">SM</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                                SocietyPro
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transforming society management with cutting-edge technology.
                            Streamline operations, enhance security, and build better communities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-all duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Features', path: '/features' },
                                { name: 'Pricing', path: '/pricing' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Account</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Login', path: '/login' },
                                { name: 'Register', path: '/register' },
                                { name: 'Dashboard', path: '/dashboard' },
                                { name: 'Profile', path: '/profile' },
                                { name: 'Settings', path: '/settings' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <i className="fas fa-map-marker-alt text-xs"></i>
                                </div>
                                <p className="text-gray-300">
                                    Pearl-79 ,<br />
                                    Behind divya jyot school
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-phone text-xs"></i>
                                </div>
                                <p className="text-gray-300">(+91)8849580017</p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-envelope text-xs"></i>
                                </div>
                                <p className="text-gray-300">ayushparmar1705@gmail.com</p>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-3 text-white">Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-r-lg font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-300">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 SocietyPro. All rights reserved.
                        </div>

                        <div className="flex flex-wrap justify-center space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                GDPR
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Support Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group relative">
                    <i className="fas fa-comments text-white text-lg"></i>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center text-white animate-pulse">
                        <i className="fas fa-bell"></i>
                    </span>
                </button>
            </div>
        </footer>
    );
}
