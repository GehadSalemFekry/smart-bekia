import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="text-white py-20 text-center bg-blue-600 flex items-center justify-center" style={{ backgroundImage: `linear-gradient(to right, #00000088, #00000088)` }}>
      <div className="max-w-4xl flex items-center justify-between">
        <div className="flex-1 max-w-md z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Reimagine Smart Bekia
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Connect with buyers and sellers in Egypt's largest marketplace for reused tech components and raw materials.
          </p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button>
        </div>
        <div className="flex-1 hidden lg:block">
          <img src={logo} alt="Smart Bekia" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default Hero
