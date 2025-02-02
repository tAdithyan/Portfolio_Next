'use client'
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const ProjectCard = ({ title, description, tech, link, isEven }) => {
  return (
    <div className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center space-x-8 mt-16`}>
      {/* Dot representing each project */}
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center relative shadow-lg`}
      >
        <div className="absolute top-0 w-4 h-4 bg-white rounded-full left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Project Description */}
      <motion.div
        className="flex flex-col space-y-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-extrabold  hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-lg     ">{description}</p>
        <div className="text-sm text-gray-500">Technologies: {tech.join(', ')}</div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-xl hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          View Project
        </a>
      </motion.div>

      {/* Connecting Line */}
      <div className="h-28 w-1 bg-gradient-to-b from-gray-300 to-gray-400"></div>
    </div>
  );
};

const WorkPage = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack e-commerce web application built with React, Node.js, and MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com/yourusername/project-one',
      image: '/images/project1.jpg', // Replace with your image path
    },
    {
      title: 'Project Two',
      description: 'A mobile app built with Flutter for both Android and iOS to track fitness goals.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com/yourusername/project-two',
      image: '/images/project2.jpg',
    },
    {
      title: 'Project Three',
      description: 'A portfolio website built with Next.js and Tailwind CSS to showcase my work.',
      tech: ['Next.js', 'Tailwind CSS'],
      link: 'https://github.com/yourusername/project-three',
      image: '/images/project3.jpg',
    },
  ];

  return (
    <><Header /><div className="min-h-screen bg-primary py-16">
      {/* Header Section */}


      {/* Projects Timeline Section */}
      <section className="px-6 max-w-screen-lg mx-auto">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: index * 0.3 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              image={project.image}
              isEven={index % 2 === 0} />
          </motion.div>
        ))}
      </section>
    </div></>
  );
};

export default WorkPage;
