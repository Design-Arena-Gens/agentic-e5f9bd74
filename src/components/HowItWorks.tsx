
import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Getting Started Is Simple</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h3 className="text-2xl font-bold mb-2">Share Your Vision</h3>
            <p className="text-gray-600">Tell us about your project, goals, and ideas. We'll listen and understand your needs.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h3 className="text-2xl font-bold mb-2">We Craft the Solution</h3>
            <p className="text-gray-600">Our team will design and build your project, keeping you updated every step of the way.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">3️⃣</div>
            <h3 className="text-2xl font-bold mb-2">Launch & Grow</h3>
            <p className="text-gray-600">We'll help you launch your project and provide support to ensure your continued success.</p>
          </div>
        </div>
        <a href="#contact" className="mt-12 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg">
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
