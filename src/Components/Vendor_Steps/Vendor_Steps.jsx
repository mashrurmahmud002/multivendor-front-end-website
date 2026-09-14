import React from "react";
import { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Personal Info",
  },
  {
    number: "2",
    title: "Business Info",
  },
  {
    number: "3",
    title: "Store Details",
  },
  {
    number: "4",
    title: "Payout Setup",
  },
];

const VendorSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-full border-b border-black bg-white">
      <div className="mx-auto grid max-w-[1260px] grid-cols-4">

        {steps.map((step) => {
          const active = activeStep === Number(step.number);
          const completed = Number(step.number) < activeStep;

          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(Number(step.number))}
              className={`
                relative
                flex
                h-[56px]
                items-center
                gap-3
                border-r
                border-gray-300
                px-5
                text-left
                transition-colors
                first:border-l

                ${
                  active
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }
              `}
            >
              {/* Step Number */}
              <span
                className={`
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  border
                  text-[9px]
                  font-semibold

                  ${
                    active
                      ? "border-black bg-black text-white"
                      : completed
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-400"
                  }
                `}
              >
                {step.number}
              </span>

              {/* Step Title */}
              <span
                className={`
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[1.2px]
                  ${
                    active
                      ? "text-black"
                      : "text-gray-400"
                  }
                `}
              >
                {step.title}
              </span>

              {/* Active Bottom Line */}
              {active && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-[158px]
                    bg-black
                  "
                />
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default VendorSteps;