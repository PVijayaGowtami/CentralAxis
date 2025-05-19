"use client";
import React from "react";

const DataCenterCTA = () => {
  return (
    <div className="bg-[#130c26] mx-[110px] text-white rounded-xl px-6 py-10 md:px-10 lg:mx-[120px] mx-5 my-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      {/* Text Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          We’ve Built the Future of Data Centers
        </h2>
        <p className="text-sm md:text-base">
          Contact our team for a demo
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-2 px-6 rounded-full">
          Set Up a Time
        </button>
        <button className="border border-white hover:bg-white hover:text-[#130c26] transition-colors text-white font-medium py-2 px-6 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DataCenterCTA;
