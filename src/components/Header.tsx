
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">S10 Digital</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Work</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Get Started
        </a>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
