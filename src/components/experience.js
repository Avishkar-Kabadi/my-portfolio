import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-employed",
      duration: "2024 - Present",
      description: "Working as a freelance Full Stack Developer using the MERN stack (MongoDB, Express.js, React.js, Node.js). Developed an E-Commerce Platform for TMT-Group to manage inventory, products, and orders. The system supports multiple user roles (Admin, Warehouse Manager, Staff, Delivery Boys, Customers). Built both a responsive customer-facing website and a mobile app using Ionic React for product browsing, registration, and purchasing. The complete order lifecycle is managed efficiently within the platform.",
    },
    {
      title: "Software Engineer Trainee",
      company: "Azurebird Cloud Solutions LLP",
      duration: "Jan 2024 - Apr 2024",
      description:"Built a small-scale Expense Management System using the MERN stack as a learning project. Implemented user authentication (login/registration), expense tracking, category-wise filtering, and data visualization. Handled frontend with React, backend with Node.js and Express, and stored data in MongoDB.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
