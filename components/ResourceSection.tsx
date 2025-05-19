import React from "react";
import {
  Mail,
  Zap,
  BarChart,
  Smile,
  Command,
} from "lucide-react";

const ResourceSection = () => {
  const features = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Resource Management",
      desc: `See all of your resources in one \n place, update issues, and \n dynamically plan your resources.`,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Deployment Automation",
      desc: `From design, sourcing, supply,\n manufacturing, and deployment\n – our system automates the \n entire process.`,
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Networking",
      desc: `Ensure your networking \n infrastructure is always in place \n and ready to scale with your \n deployments.`,
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: "Firmware Versioning",
      desc: `Ensure your firmware is \n always up to date and secure with \n our automated versioning system.`,
    },
    {
      icon: <Command className="h-6 w-6" />,
      title: "Digital Twins",
      desc: `Plan capacity intelligently with our \n digital twin technology.`,
    },
  ];

  return (
    <section className="bg-black mx-[110px] text-white py-16 px-4 md:px-12 lg:px-24 overflow-hidden mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block bg-gray-700 text-sm font-medium rounded-full px-4 py-1 mb-4">
            Built for Scale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dynamic Resource Management
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
            Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 min-w-[100%]">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[280px] bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl p-5 flex items-start gap-4 shrink-0"
              >
                <div className="text-white bg-zinc-800 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
