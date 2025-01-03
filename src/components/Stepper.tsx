import React from "react";
import right from "../assets/right.png";

const Stepper: React.FC<{
  steps: { icon: string | number; label: string; id: any }[];
  currentStep: number;
}> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center max-w-[600px] justify-between mx-auto w-full space-x-4 ">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {step.id !== 4 && (
            <div
              className={`flex items-center justify-center w-10 h-10 ${
                index + 1 === currentStep ? "text-white" : "text-gray-500"
              }`}
            >
              {typeof step.icon === "string" && step.icon ? (
                <img src={step.icon} alt="icon" />
              ) : (
                <span className="text-gray-400">—</span>
              )}
            </div>
          )}
          <div
            className={` my-2 flex   items-center   gap-4 ${
              index + 1 === currentStep
                ? "text-orange-500 text-sm font-normal"
                : "text-gray-500 text-sm"
            }`}
          >
            {step.label}

            {step.id !== 4 && index < steps.length - 1 && (
              <img src={right} alt="right" className="w-[14px] h-[14px]" />
            )}
          </div>
          {index < steps.length - 1 && <span></span>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
