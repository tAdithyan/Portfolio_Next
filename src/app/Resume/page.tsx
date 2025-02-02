import Header from '@/components/Header';
import React from 'react';
/* eslint-disable react/no-unescaped-entities */

const ResumePage = () => {
  return (
    
    <><Header /><div className="min-h-screen bg-primary py-10">
      {/* Header Section */}
      <section className="text-center px-6 mb-10">
        <h1 className="text-4xl font-bold">Adithyan T</h1>
        <p className="text-xl ">Software Developer | Web & Mobile Apps</p>
        <p className="mt-2 text-md ">Email: john.doe@example.com | LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe</p>
      </section>

      {/* Summary Section */}
      <section className="px-6 mb-10">
        <h2 className="text-2xl font-semibold ">Summary</h2>
        <p className="mt-4 ">
          Passionate software developer with 5+ years of experience in building responsive and scalable applications.
          Expertise in web and mobile development using JavaScript, React, Node.js, and Flutter.
          Proven track record of delivering high-quality software on time while maintaining excellent client relations.
        </p>
      </section>

      {/* Skills Section */}
      <section className="px-6 mb-10">
        <h2 className="text-2xl font-semibold ">Skills</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <span className="bg-blue-100 py-2 px-4 rounded-full">JavaScript</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">React</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">Node.js</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">Express</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">Flutter</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">SQL</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">Docker</span>
          <span className="bg-blue-100 py-2 px-4 rounded-full">Git</span>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 mb-10">
        <h2 className="text-2xl font-semibold  ">Experience</h2>
        <div className="mt-4 space-y-8">
          <div>
            <h3 className="text-xl font-semibold  ">Senior Software Developer</h3>
            <p className="  ">XYZ Tech - Remote (Jan 2022 - Present)</p>
            <ul className="mt-2 list-disc pl-5    ">
              <li>Led a team of 5 developers in building and maintaining a scalable e-commerce platform using React and Node.js.</li>
              <li>Optimized web performance by refactoring legacy code, reducing load times by 40%.</li>
              <li>Implemented automated testing strategies to increase code quality and reduce production bugs by 30%.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold  ">Software Developer</h3>
            <p className="  ">ABC Solutions - New York, NY (Mar 2019 - Dec 2021)</p>
            <ul className="mt-2 list-disc pl-5    ">
              <li>Developed and maintained web applications using React.js and Redux for state management.</li>
              <li>Collaborated with UI/UX teams to create responsive mobile-first designs for web apps.</li>
              <li>Integrated third-party APIs and optimized database queries, improving data processing efficiency by 25%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 mb-10">
        <h2 className="text-2xl font-semibold  ">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold  ">Bachelor of Science in Computer Science</h3>
          <p className="  ">University of XYZ - New York, NY (Graduated: May 2018)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 mb-10">
        <h2 className="text-2xl font-semibold  ">Contact Information</h2>
        <div className="mt-4">
          <p className="   ">Feel free to reach out via the following platforms:</p>
          <ul className="mt-2   ">
            <li>Email: <a href="mailto:john.doe@example.com" className="text-blue-500 hover:underline">john.doe@example.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/johndoe" className="text-blue-500 hover:underline">linkedin.com/in/johndoe</a></li>
            <li>GitHub: <a href="https://github.com/johndoe" className="text-blue-500 hover:underline">github.com/johndoe</a></li>
          </ul>
        </div>
      </section>
    </div></>
  );
};

export default ResumePage;
