import React from "react";
import HighlightCard from "../card-highlight";

function SpecialCardDetails() {
  return (
    <div className="h-full text-[16px]/[24px]">
      <div className="">
        <span className="font-bold">CDK Responsive Builder:</span>
        Comprehensive Digital Platform Creation Tool, Streamlined Design
        Interface for Professional Websites and Online Stores (Black/Blue)
      </div>
      <p className="h-[24px] mt-0 text-[#1B88F4]">26% Off</p>
      <p className="font-bold h-[24px]">Main Highlights</p>

      <HighlightCard
        classes="ml-3 p-2 rounded-xl bg-[#FFF4ED] "
        indexes={[9.9, 8.9, 8.9]}
        titles={["building responsive", "Cool", "Docs"]}
      />

      <p className="h-[24px] my-2">Why we love it</p>
      <HighlightCard
        indexes={["✅", "✅", "✅"]}
        titles={["Documentation", "Easy use", "Out of the box"]}
      />

      <select
        className="outline-none mt-2 text-[#1B88F4]"
        name="cars"
        id="cars"
      >
        <option value="Show More">Show More</option>
      </select>
    </div>
  );
}

export default SpecialCardDetails;
