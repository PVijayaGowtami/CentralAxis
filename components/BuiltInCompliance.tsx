"use client";
import React, { useRef, useEffect, useState } from "react";

const BuiltInCompliance = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white mx-[110px] px-6 md:px-24 py-12 rounded-xl flex flex-col lg:flex-row gap-8 mb-10">
      {/* Text Section */}
      <div ref={textRef} className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Built-In Compliance</h2>
        <p className="mb-6 leading-relaxed">
          CentralAxis provides compliance as a service for data centers.
        </p>
        <ul className="list-none space-y-2">
          <li>✔ Track data for EU, US, and global regulatary standards.</li>
          <li>✔We guarantee compliance and handle every step between monitoring and reporting.</li>


        </ul>
      </div>

      {/* Video Section */}
      <div className="flex-shrink-0 w-full lg:w-[400px]">
        <video
          width="100%"
          height={textHeight}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="rounded-lg object-cover w-full"
          style={{ height: `${textHeight}px` }}
        >
          <source src="assets/__compliance.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default BuiltInCompliance;
