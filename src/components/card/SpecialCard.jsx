import React from "react";
import Web from "../../assets/web.png";
import ImageCard from "./card-image";
import SpecialCardDetails from "./card-details/SpecialCardDetails";
import RatingCard from "./card-rating";
function SpecialCard() {
  return (
    <div className="flex justify-between max-sm:flex-col items-center h-full p-4 gap-4">
      <ImageCard image={Web} imageTitle="Builder" />
      {/* card details components */}
      <SpecialCardDetails />

      {/* rating component */}
      <div className="flex flex-col min-h-[440px] max-h-[500px] w-[250px] max-sm:min-h-[255px]  justify-between max-sm:w-full items-center">
        <RatingCard rating={9.8} ratingType="Exceptional" />
        <div className="w-full">
          <button className="bg-[#1B88F4] w-[232px] rounded-xl text-white h-[48px] max-sm:w-full">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;
