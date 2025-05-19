import React from "react";

const faqs = [
  {
    question: "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Depending on your requirements, we offer flexible pricing models.",
  },
  {
    question: "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-black mx-[110px]  text-white py-12 px-[120px] mt-10">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-gray-800 text-sm rounded-full mb-2">
          FAQs
        </div>
        <h2 className="text-3xl font-semibold mb-2">
          Frequently asked questions
        </h2>
        <p className="text-gray-400">
          Find answers to common questions about our solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 text-sm">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-1">{faq.question}</h3>
            <p className="text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
