
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© 2025 S10 Digital Solutions. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
