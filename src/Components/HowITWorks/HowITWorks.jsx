import React from "react";
const steps = [
  {
    number: "01",
    title: "Browse Vendors",
    description:
      "Explore thousands of verified independent sellers across every category.",
  },
  {
    number: "02",
    title: "Add to Cart",
    description:
      "Mix products from multiple vendors — unified checkout, no friction.",
  },
  {
    number: "03",
    title: "Secure Payment",
    description:
      "End-to-end encrypted payments with buyer protection on every order.",
  },
  {
    number: "04",
    title: "Fast Delivery",
    description:
      "Vendors ship directly. Track every parcel from a single dashboard.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-black px-3 py-10 sm:px-6 lg:px-8">
      {/* Section Label */}
      <p className="mb-5 text-[7px] font-medium uppercase tracking-[1.5px] text-gray-600">
        How It Works
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 border-l border-gray-800 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="
              group
              min-h-[148px]
              border-r
              border-gray-800
              border-b
              p-5
              transition-colors
              hover:bg-white
              lg:border-b-0
            "
          >
            {/* Number */}
            <span
              className="
                block
                text-[28px]
                font-black
                leading-none
                tracking-[-1.5px]
                text-[#303030]
                transition-colors
                group-hover:text-black
              "
            >
              {step.number}
            </span>

            {/* Title */}
            <h3
              className="
                mt-4
                text-[10px]
                font-black
                uppercase
                leading-none
                tracking-[-0.3px]
                text-white
                transition-colors
                group-hover:text-black
              "
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-[190px]
                text-[8px]
                font-normal
                leading-[1.6]
                text-gray-600
                transition-colors
                group-hover:text-gray-500
              "
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;