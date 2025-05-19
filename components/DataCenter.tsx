"use client";
import React, { useRef, useEffect, useState } from "react";

const DataCenter = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="bg-[#1a1a1a] mx-[110px]  text-white px-[30px] md:px-[110px] py-12 rounded-xl flex flex-col-reverse lg:flex-row gap-8 mb-10">
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Data Center Planning</h2>
        <p className="mb-6 leading-relaxed">
          Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.
        </p>
        <ul className="list-none space-y-2">
          <li>✔ Model new architectures and see detailed implications on power and cooling needs.</li>
          <li>✔ Design unique specifications for your data center.</li>
          <li>✔ Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataCenter;
