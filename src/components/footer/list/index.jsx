import React from "react";

function List() {
  const listItems = [
    "Web Builder",
    "Hosting",
    "Data Center",
    "Robotic-Automation",
  ];
  return (
    <div className="text-[#ffffff] flex gap-3 flex-col">
      <p className="text-[16px]/[24px]">Category</p>
      {listItems.map((list, idx) => {
        return (
          <p key={idx} className="text-[14px]/[20px]">
            {list}
          </p>
        );
      })}
    </div>
  );
}

export default List;
