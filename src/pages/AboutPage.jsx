import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-6xl font-extrabold tracking-tight mb-8 leading-tight text-center md:text-left">
            About Study Sphere
          </h1>
          <p className="text-lg max-w-lg text-gray-300 leading-relaxed mx-auto md:mx-0 text-center md:text-left">
            Study Sphere is a cutting-edge platform designed to streamline academic management, enhance communication between students, teachers, and administrators, and empower students on their educational journey.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center relative">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To provide an intuitive, user-friendly platform that enhances the educational experience by making information accessible, communication seamless, and management efficient.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the go-to platform for educational institutions worldwide, fostering an environment where learning and growth are at the forefront.
            </p>
          </div>
          <img 
            src="/background.jpg" 
            alt="Decorative" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20 rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
