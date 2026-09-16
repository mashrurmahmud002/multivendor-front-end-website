import React from "react";


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









const VendorSteps = ({activeStep, setActiveStep,disabled}) => {
 

  return (
    <div className="w-full border-b border-black bg-white">
      <div className="mx-auto flex max-w-[1260px] overflow-x-auto sm:grid sm:grid-cols-4">

        {steps.map((step) => {
          const active = activeStep === Number(step.number);
          const completed = Number(step.number) < activeStep;
          console.log(activeStep)
          console.log(completed)

          return (
            <button
              disabled={activeStep !== Number(step.number)}
              key={step.number}
              onClick={() => setActiveStep(Number(step.number))}
              className={`
                relative
                flex
                h-[56px]
                shrink-0
                items-center
                gap-3
                border-r
                border-gray-300
                px-5
                text-left
                transition-colors
                first:border-l
                ${disabled && "cursor-not-allowed"}
                

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
                  whitespace-nowrap
                  text-[10px]
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
                    w-full
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