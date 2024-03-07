import React from "react";
function CardDetails({ title, details, highlight }) {
  return (
    <div className="h-full text-[16px]/[24px]">
      <div>
        <span className="font-bold">{title}</span>
        {details}
      </div>
      <p className="font-bold h-[24px]">Main Highlights</p>
      <div className="p-3">{highlight}</div>
      <select className="outline-none  text-[#1B88F4]" name="cars" id="cars">
        <option value="Show More">Show More</option>
      </select>
    </div>
  );
}

export default CardDetails;
