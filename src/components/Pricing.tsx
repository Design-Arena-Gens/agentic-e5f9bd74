
'use client';

import React, { useEffect, useState } from 'react';

interface Plan {
  plan: string;
  price: string;
  audience: string;
  features: string[];
}

const Pricing = () => {
  const [pricing, setPricing] = useState<Plan[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setPricing(data.pricing));
  }, []);

  return (
    <section id="pricing" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Flexible Packages for Every Need</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</p>
              <p className="text-gray-500 mb-6">{plan.audience}</p>
              <ul className="text-left text-gray-600 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Get a Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
