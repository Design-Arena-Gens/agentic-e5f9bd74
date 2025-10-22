
'use client';

import React, { useEffect, useState } from 'react';

interface Partner {
  name: string;
  logo: string;
}

const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setPartners(data.partners));
  }, []);

  return (
    <section id="partners" className="w-full py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Trusted by These Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <img src={partner.logo} alt={partner.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
