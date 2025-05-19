import React from "react";

const BookDemo = () => {
  return (
    <div className="mx-[120px]"> {/* 👈 Adds 120px margin left and right */}
      <section
        className="relative bg-black text-white py-12 px-6 rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url("/assets/background.png")`, // ✅ Adjust if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Book a Demo</h2>
          <p className="text-lg mb-6">
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition ">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;
