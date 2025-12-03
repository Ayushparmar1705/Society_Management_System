import React from 'react';
import { 
  Home, 
  Users, 
  Car, 
  Shield, 
  MessageSquare, 
  Calendar,
  Bell,
  FileText,
  Award,
  Heart
} from 'lucide-react';
import UserHeader from './Userheader';

export default function Aboutus() {
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residence Management",
      description: "Comprehensive management of all residential units with owner/tenant details, occupancy status, and communication tools."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff Management",
      description: "Efficient management of security, maintenance, and housekeeping staff with duty scheduling and performance tracking."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Parking Allocation",
      description: "Smart parking management with assigned slots, visitor parking, and real-time availability tracking."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Chairman Support",
      description: "Dedicated tools for society leadership including meeting management, decision tracking, and governance support."
    },

  
  ];

  const stats = [
    { value: "500+", label: "Societies Managed" },
    { value: "50,000+", label: "Residents Served" },
    { value: "24/7", label: "Support Available" },
    { value: "99%", label: "Satisfaction Rate" }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <UserHeader></UserHeader>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CommunityConnect</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Revolutionizing society management with technology that brings communities closer
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To empower residential communities with intelligent management solutions that 
                streamline operations, enhance security, and foster stronger neighborly connections 
                through innovative technology.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To create smarter, safer, and more connected residential communities where 
                technology enhances quality of life and simplifies society management for 
                everyone involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Society Management Features
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Everything you need to efficiently manage your residential society in one integrated platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Communities Nationwide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform has transformed how residential societies operate, bringing efficiency and transparency to community living.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do for our community partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Transparency</h3>
              <p className="text-gray-600">
                We believe in open communication and clear visibility into all society operations and finances.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Community First</h3>
              <p className="text-gray-600">
                Every feature is designed with the resident's experience and community well-being in mind.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality service and continuously improving our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Society Management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of communities already benefiting from our comprehensive management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
              Request a Demo
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} CommunityConnect. All rights reserved. 
            Transforming society management, one community at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}