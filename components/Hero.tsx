"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  const logos = [
    "cisco.svg",
    "dell.svg",
    "hp.svg",
    "intel.svg",
    "lenovo.svg",
    "schneider.svg",
    "supermicro.svg",
    "nvidia.svg",
    "amd.svg",
  ];



  return (
    <section className="bg-gradient-to-br from-[#08020d] via-[#06010a] to-[#0a0112] text-white border-y border-[#05020b]">

      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Data Center Management <br className="hidden sm:block" /> Software
        </h1>

        {/* Subheading */}
        <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
          Increase uptime, reduce costs, automate operations, and stay compliant.
          <br />
          Built for colocations, data centers, and cloud providers.
        </p>

        {/* CTA Button */}
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-small px-12 py-3 text-sm sm:text-base transition mb-12">
          Request Demo
        </button>

        {/* Divider Text */}
        <p className="text-sm sm:text-base text-gray-400 mb-6">
          Seamless integrations with any data center hardware
        </p>

        {/* Scrolling logos */}
        <div className="overflow-hidden py-4 mb-20">
          <div className="flex gap-x-12 animate-scroll w-max">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="w-24 h-12 relative flex-shrink-0">
                <Image
                  src={`/assets/${logo}`}
                  alt={logo.replace(".svg", "")}
                  width={96}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Built for AI */}
        <p className="text-gray-400 font-semibold text-sm tracking-wider mb-2">
          <button>Built for AI</button>
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Modernizing the Digital Backbone
        </h2>

        <p className="text-sm text-gray-400">
          Data center software (DCIM, BMS and EPMS) has stagnated.
          <br />
          We&aposve built a better way.
        </p>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
  `}</style>
    </section>

  );
}
