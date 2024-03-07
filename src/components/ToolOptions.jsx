import React from "react";

function ToolOptions() {
  const categories = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];
  return (
    <div className="flex flex-wrap lg:px-3 px-0 mt-2 justify-start items-center lg:gap-14 md:gap-10 gap-2 max-h-max min-h-[36px]">
      {categories.map((category) => {
        return (
          <p className="lg:text-[14px]/[20px] text-[12px]/[20px] whitespace-nowrap ">
            {category}
          </p>
        );
      })}
    </div>
  );
}

export default ToolOptions;
