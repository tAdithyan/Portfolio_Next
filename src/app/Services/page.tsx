'use client'
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        {/* Icon and title container */}
        <motion.div 
          className="flex items-center space-x-4 mb-6"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="text-4xl text-blue-600"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h3>
        </motion.div>

        {/* Description with fade-in animation */}
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>

        {/* Animated underline on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <><Header /><div className="min-h-screen bg-primary py-10">
      {/* Header Section */}
      <section className="text-center px-6">
        <h1 className="text-4xl font-bold text-white">Software Development Services</h1>
        <p className="mt-4 text-xl text-gray-600">
          We offer a wide range of software development services to help your business succeed.
        </p>
      </section>

      {/* Services List Section */}
      <section className="mt-10 px-6 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Web Development"
          description="We build responsive, high-performance websites that are tailored to your business needs."
          icon={<i className="fas fa-laptop-code"></i>} />

      </section>

      {/* Call to Action Section */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold ">Ready to Start Your Project?</h2>
        <p className="mt-4 text-lg text-gray-600">Let’s talk about how we can bring your ideas to life.</p>
        <a href="mailto:contact@yourdomain.com" className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition">
          Contact Us
        </a>
      </section>
    </div></>
  );
};

export default ServicesPage;
