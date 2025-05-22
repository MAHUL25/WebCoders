import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Monitors = () => {
  const handleNavigate = () => {
    window.location.href = '/htmlEditor';
  };

  return (
    <div className="relative min-h-screen text-white bg-[#181818] px-6 py-12 flex flex-col items-center justify-center space-y-16 overflow-visible">
      {/* Softer & Smaller Blur Circle */}
      <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#91b9b6] opacity-60 rounded-full blur-[63.5px] z-0 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl font-bold leading-tight">
          Every day the
          <span className="text-cyan-400"> Web Coders</span>
          <br />
          is always growing
        </h1>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
        <button className="bg-[#282828] text-lg font-semibold px-6 py-3 rounded-md border border-white hover:bg-[#333333] transition">
          Learn more concepts
        </button>
        <button onClick={handleNavigate} className="bg-[#282828] cursor-pointer text-lg font-semibold px-6 py-3 rounded-md border-2 border-[#d4d4d4] hover:bg-[#383838] flex items-center transition">
          Try WebCoders for free
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Image */}
      <div className="relative z-10 max-w-full">
        <img
          src="/assets/monitors-preview.png"
          alt="Monitors"
          className="w-full max-w-[954px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Monitors;
