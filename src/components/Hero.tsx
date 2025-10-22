
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="w-full text-center py-20 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Transform Your Digital Presence with AI-Powered Creativity</h1>
        <p className="text-xl text-gray-600 mb-8">From stunning designs to smart automation — S10 Digital Solutions helps you grow, impress, and save time.</p>
        <div className="space-x-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg">Get Started</a>
          <a href="#portfolio" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 text-lg">See Our Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
