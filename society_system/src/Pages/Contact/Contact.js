import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto p-6 md:p-12">
            {/* Contact Info */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Phone */}
                    <div className="flex flex-col items-start space-y-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-6 h-6 text-blue-600 mb-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" 
                            />
                        </svg>
                        <h3 className="font-medium text-gray-700">Phone Support</h3>
                        <p className="text-gray-600">(+91) 8849580017</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-start space-y-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-6 h-6 text-blue-600 mb-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M16 12H8m8-4H8m8 8H8m16 0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2z" 
                            />
                        </svg>
                        <h3 className="font-medium text-gray-700">Email Support</h3>
                        <p className="text-gray-600">ayushparmar1705@gmail.com</p>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-start space-y-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-6 h-6 text-blue-600 mb-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 11c0 2.28 2 5 2 5s2-2.72 2-5a2 2 0 1 0-4 0zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" 
                            />
                        </svg>
                        <h3 className="font-medium text-gray-700">Address</h3>
                        <p className="text-gray-600">Pearl-79, Shilaj, near Kaveri Soham</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Your Request</h2>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700 font-medium">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700 font-medium">Email</label>
                            <input 
                                type="email" 
                                placeholder="johndoe@gmail.com" 
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700 font-medium">Society Name</label>
                            <input 
                                type="text" 
                                placeholder="Grand Society" 
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700 font-medium">Address</label>
                            <textarea 
                                rows="2" 
                                placeholder="Complete society address including the postal code" 
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 text-gray-700 font-medium">Purpose of Contact</label>
                        <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option disabled selected>Select Purpose</option>
                            <option value="register_society">Register New Society</option>
                            <option value="become_chairman">Become Chairman</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 text-gray-700 font-medium">Detailed Message</label>
                        <textarea 
                            rows="4" 
                            placeholder="Your message..." 
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
