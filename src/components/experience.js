import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "The Data Tech Labs",
      duration: "Oct 2024 - Present",
      description: "Currently working on a Quality App for Suhana using Power Platform, Power Apps, Power Automate, and SharePoint Lists. The app empowers Super-Admins to manage users, Admins to define inspection parameters, Supervisors to monitor alerts, and Inspectors to perform inspections and submit records. It integrates dynamic forms, real-time alerts, and automation to ensure consistent quality control throughout the inspection process.",
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-employed",
      duration: "2024 - Present",
      description: "Currently working on the E-Commerce Platform for TMT-Group, where I manage inventory, products, and orders. The platform supports multiple roles such as Admin, Warehouse Manager, Staff, Delivery Boys, and Customers. I have developed a customer-facing website for product browsing, registration, and purchasing, alongside a mobile app built using Ionic React for the customer role. All orders are efficiently managed through the E-Commerce platform.",
    },
    // Add any other internships or experiences from your CV here
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
