import React from 'react'
import Userheader from '../../Component/Usercomponent/Userheader'
import "../../globlecss/styles.css"
import Userfooter from '../../Component/Usercomponent/Userfooter';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
  const features = [
    {
      icon: "🏠",
      title: "Residence Management",
      description: "Efficiently manage resident data, flat allocations, and community communications"
    },
    {
      icon: "🛡️",
      title: "Security Management",
      description: "Advanced security systems with visitor tracking and emergency response features"
    },
    {
      icon: "🚗",
      title: "Parking Allocation",
      description: "Smart parking space management with real-time availability and booking system"
    },
    {
      icon: "👤",
      title: "Visitor Authentication",
      description: "Secure visitor verification system with digital passes and real-time monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-70 mix-blend-multiply animate-pulse"></div>
      <div className="fixed top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-70 mix-blend-multiply animate-pulse delay-1000"></div>
      <div className="fixed -bottom-40 left-1/2 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-70 mix-blend-multiply animate-pulse delay-500"></div>
      
      <nav className='w-full relative z-10'>
        <Userheader />
      </nav>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                <p className="text-blue-600 font-medium text-sm">Modern Society Management</p>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Simplify Your{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Society
                  </span>{' '}
                  Management
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Streamline operations, enhance security, and improve resident satisfaction with our 
                  all-in-one society management platform designed for modern communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 text-sm">Societies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50K+</div>
                  <div className="text-gray-600 text-sm">Residents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  className="w-full h-[500px] object-cover" 
                  src='/Assets/hero-image.jpg' 
                  alt='Society Management Dashboard'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Real-time Updates</div>
                    <div className="text-sm text-gray-600">Instant notifications</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mobile App</div>
                    <div className="text-sm text-gray-600">Available on all devices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Modern Communities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your society efficiently and securely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Society Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of societies that trust our platform for seamless community management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    <Userfooter></Userfooter>  
    </div>
  )
}