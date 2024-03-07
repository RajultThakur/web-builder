import React from "react";
import ImageCard from "../card/card-image";
import Web from "../../assets/web.png";
import Label from "./Label";

function RecommendationCard() {
  return (
      <div className="flex max-w-[333px] h-[425px] p-3 flex-col items-center gap-3">
        <ImageCard image={Web} imageTitle="" />

        <div className="flex w-full gap-3 items-center justify-start">
          <Label classes="rounded-lg bg-[#F2F4F7] text-[#074786] h-[20px] text-[13px] p-1" title="26% Off"/>
          <Label classes="rounded-lg bg-[#F2F4F7] text-[#074786] h-[20px] text-[13px] p-1" title="Limited time"/>
        </div>

        <div className="font-bold text-[16px]">Webbuilder 1</div>

        <p className="w-full text-[16px] h-[44px]">
          Computer Modern clasic with wix support
        </p>
        <div className="w-full flex gap-2 items-start justify-start">
          <Label classes="text-[20px] text-[#5C6874]" title = "$39.96"/>
          <Label classes=" relative top-2 text-[14px] text-[#9FA9B3]" title = "$49.96"/>
          <Label classes="text-[13px] top-2 relative text-[#EF4C5D]" title = "(20% Off)"/>
        </div>
        <div className="w-full">
        <button className="bg-[#1B88F4] w-full rounded-xl text-white h-[48px]">
              View
            </button>
        </div>
      </div>
  );
}

export default RecommendationCard;
