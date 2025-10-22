
'use client';

import React, { useEffect, useState } from 'react';

interface Service {
  title: string;
  description: string;
  subServices: string[];
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <section id="services" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need to Stand Out in the Digital World</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-left text-gray-500 text-sm">
                {service.subServices.map((sub, i) => (
                  <li key={i} className="mb-1 list-disc list-inside">{sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-12 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-lg">
          Explore All Services
        </a>
      </div>
    </section>
  );
};

export default Services;
