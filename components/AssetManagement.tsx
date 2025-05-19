"use client";
import React, { useRef, useEffect, useState } from "react";

const AssetManagement = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className="bg-[#1a1a1a] mx-[110px] text-white px-[30px] md:px-[110px] py-10 rounded-none flex flex-col md:flex-row justify-between gap-8 mb-10"
    >
      {/* Text Section */}
      <div ref={textRef} className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Asset Management</h2>
        <p className="mb-6 leading-relaxed">
          Streamline your data center operations with our comprehensive asset
          management system. Track, maintain, and optimize your infrastructure
          with precision and ease.
        </p>
        <ul className="list-none pl-0 space-y-2">
          <li>✔ Automated inventory tracking and lifecycle management</li>
          <li>✔ Intelligent ticketing based on asset health and performance</li>
          <li>✔ Efficient resource allocation and optimization</li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="flex-shrink-0 w-full md:w-[400px]">
        <video
          width="100%"
          height={textHeight}
          controls
          autoPlay
          muted
          loop
          className="object-cover w-full"
          style={{ height: `${textHeight}px` }}
        >
          <source src="assets/hb-monitoring.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AssetManagement;
