import React from 'react';
import profilePic from '../accets/profile.png'
import Image from 'next/image'


const ExactHeroSection = () => {

console.log(profilePic)
    return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Navigation */}
      <nav className="absolute top-0 w-full px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="/" className="text-amber-700 border-b border-amber-700">Home</a>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
            <a href="/holdings" className="text-white hover:text-gray-300">Holdings</a>
            <a href="/updates" className="text-white hover:text-gray-300">Updates</a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h2 className="font-serif italic text-white text-2xl" style={{
              fontFamily: 'Dancing Script, cursive'
            }}>𝓐𝓭𝓲𝓽𝓱𝔂𝓪𝓷 𝓣
</h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="2" rx="1"/>
                <rect x="3" y="11" width="18" height="2" rx="1"/>
                <rect x="3" y="19" width="18" height="2" rx="1"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 min-h-screen">
        <div className="lg:w-1/2 z-10 pt-20">
          <h1 className="text-6xl lg:text-7xl text-white font-serif mb-8" style={{
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.2'
          }}>
           FrontEnd Developer
          </h1>
          <button className="bg-amber-700 text-white px-12 py-4 text-lg hover:bg-amber-800 transition-colors">
            Read More
          </button>
        </div>
        
        <div className="lg:w-1/2 flex justify-end">
          <div className="relative">
            <Image
              src={profilePic}
              alt="Professional portrait"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 text-white flex items-center">
        <span className="mr-3 text-lg">Scroll Down</span>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default ExactHeroSection;