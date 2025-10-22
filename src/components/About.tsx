
import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">A Modern Digital Partner for Modern Challenges</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          S10 Digital Solutions was founded on the principle that cutting-edge digital services should be accessible to everyone. We blend creative design, strategic thinking, and the power of AI to deliver solutions that help small businesses and professionals thrive in a competitive landscape.
        </p>
        <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-600 pl-4 max-w-2xl mx-auto">
          “You don’t need a big team to achieve big results. You just need smart solutions.”
        </blockquote>
      </div>
    </section>
  );
};

export default About;
