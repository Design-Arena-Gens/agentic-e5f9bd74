
'use client';

import React, { useEffect, useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setPortfolio(data.portfolio));
  }, []);

  return (
    <section id="portfolio" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
