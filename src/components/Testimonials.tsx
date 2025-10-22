
'use client';

import React, { useEffect, useState } from 'react';

interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials));
  }, []);

  return (
    <section id="testimonials" className="w-full py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Early Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
