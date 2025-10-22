
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Businesses and Professionals Trust S10</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">AI-Driven Efficiency</h3>
            <p className="text-gray-600">We leverage the latest AI tools to deliver high-quality work faster and more affordably.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-2">Customized for You</h3>
            <p className="text-gray-600">Every project is tailored to your specific needs and goals. No one-size-fits-all solutions.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-2">Reliable & Transparent</h3>
            <p className="text-gray-600">We believe in clear communication and building long-term relationships with our clients.</p>
          </div>
        </div>
        <a href="#contact" className="mt-12 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg">
          Get Your Free Consultation
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;
