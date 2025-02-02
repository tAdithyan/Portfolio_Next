'use client'
import React from 'react';
import { Clock, Briefcase, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      period: "2022 - Present",
      description: "Led development of cloud-native applications, mentored junior developers, and implemented CI/CD pipelines.",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["React", "Node.js", "AWS"]
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Digital Innovations",
      period: "2019 - 2022",
      description: "Developed full-stack web applications and maintained legacy systems while improving performance.",
      icon: <Clock className="w-6 h-6" />,
      skills: ["JavaScript", "Python", "Docker"]
    },
    {
      id: 3,
      title: "Computer Science Degree",
      company: "Tech University",
      period: "2015 - 2019",
      description: "Bachelor's degree in Computer Science with focus on software engineering and algorithms.",
      icon: <GraduationCap className="w-6 h-6" />,
      skills: ["Algorithms", "Data Structures", "Software Design"]
    }
  ];

  return (
    <><Header /><div className="min-h-screen bg-primary py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Professional Experience</h1>
          <p className="text-lg text-gray-600">A journey through my career and achievements</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Icon container */}
                <div className="absolute left-0 p-3 bg-white rounded-full border-2 border-blue-500 z-10">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="ml-24 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default ExperienceTimeline;