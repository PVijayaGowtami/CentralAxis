"use client";
import React, { useRef, useEffect, useState } from "react";

const SinglePane = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="bg-[#1a1a1a] mx-[110px] text-white px-[30px] md:px-[110px] py-12 rounded-xl flex flex-col-reverse lg:flex-row gap-8 mb-10">
      {/* Video Section (Left) */}
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
          <source src="assets/networking-b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section (Right) */}
      <div ref={textRef} className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">A Single Pane of Glass</h2>
        <p className="mb-6 leading-relaxed">
          A unified view across all of your BMS and EPMS systems, tailored to your needs.
        </p>
        <ul className="list-none space-y-2">
          <li>✔ Comprehensive visibility across all of your colocation infrastructure</li>
          <li>✔ Customizable interface tailored to your specific operational requirements and priorities.</li>
          <li>✔ Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.</li>
        </ul>
      </div>
    </div>
  );
};

export default SinglePane;
