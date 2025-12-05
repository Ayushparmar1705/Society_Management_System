import React from 'react';
import Userheader from '../../Component/Usercomponent/Userheader';
import Userfooter from '../../Component/Usercomponent/Userfooter';
import "../../globlecss/styles.css";

export default function Home() {
  const features = [
    {
      icon: "🏠",
      title: "Residence Management",
      description: "Manage resident data, flat allocations, and community communications efficiently."
    },
    {
      icon: "🛡️",
      title: "Security Management",
      description: "Security systems with visitor tracking and emergency response features."
    },
    {
      icon: "🚗",
      title: "Parking Allocation",
      description: "Manage parking spaces with real-time availability and booking system."
    },
    {
      icon: "👤",
      title: "Visitor Authentication",
      description: "Secure visitor verification with digital passes and real-time monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Userheader />

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Simplify Your Society Management
          </h1>
          <p className="text-gray-600 text-lg">
            Streamline operations, enhance security, and improve resident satisfaction with our platform.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Start Free Trial
            </button>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 text-center gap-4 px-4">
          <div>
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 text-sm">Societies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">50K+</div>
            <div className="text-gray-600 text-sm">Residents</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">99%</div>
            <div className="text-gray-600 text-sm">Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Society Management?</h2>
        <p className="mb-6">Join thousands of societies that trust our platform for seamless community management.</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100">Get Started Today</button>
          <button className="px-6 py-2 border border-white rounded-md hover:bg-white/20">Contact Sales</button>
        </div>
      </section>

      <Userfooter />
    </div>
  );
}
