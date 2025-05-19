"use client";
import React, { useRef, useEffect, useState } from "react";

const NetworkManagement = () => {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Network Management and Monitoring
        </h2>
        <p className="mb-6 leading-relaxed">
          Comprehensive network monitoring and management that ensures optimal performance,
          security, and reliability across your entire data center infrastructure.
        </p>
        <ul className="list-none space-y-2">
          <li>✔ Real-time network performance monitoring and bandwidth optimization</li>
          <li>✔ Automated network security and threat detection</li>
          <li>✔ Advanced network diagnostics and troubleshooting tools</li>
        </ul>
      </div>
    </div>
  );
};

export default NetworkManagement;
