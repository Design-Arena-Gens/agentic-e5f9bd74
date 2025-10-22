
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Let’s Build Something Smart Together</h2>
        <p className="text-lg text-gray-600 mb-8">Based in Sri Lanka, serving clients worldwide.</p>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
            </div>
            <select className="w-full p-3 border rounded-md mb-4">
              <option>Select a service</option>
              <option>Design & Branding</option>
              <option>Digital Marketing</option>
              <option>Resume Building</option>
              <option>AI-Powered Productivity Tools</option>
              <option>Web Development</option>
            </select>
            <textarea placeholder="Message" rows={5} className="w-full p-3 border rounded-md mb-4"></textarea>
            <div className="flex justify-center space-x-4">
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Send Message</button>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Chat on WhatsApp</a>
            </div>
          </form>
          <p className="mt-8 text-gray-600">
            or email us at <a href="mailto:hello@s10digitalsolutions.com" className="text-blue-600 hover:underline">hello@s10digitalsolutions.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
