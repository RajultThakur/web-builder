import React, { useEffect, useState } from "react";
import Web from "../../assets/web.png";
import CardDetails from "./card-details";
import ImageCard from "./card-image";
import RatingCard from "./card-rating";
import { Trophy, Gem } from "lucide-react";
import CardLabel from "./card-label";
function Card({ data }) {
  console.log(data);
  const {
    imageTitle,
    title,
    details,
    mainHighlight,
    rating,
    ratingType,
    label,
  } = data;
  //   useEffect(() => {
  // if(!data) return ;
  //   },[])

  return (
    <>
      {label && (
        <CardLabel
          Icon={label === "Best Choice" ? <Trophy /> : <Gem />}
          label={label}
        />
      )}
      <div className="flex flex-row max-sm:flex-col justify-between items-center min-h-[255px] max-h-max border-gray-[2px] border rounded-xl p-4 gap-4 mb-2">
        <ImageCard image={Web} imageTitle={imageTitle} />
        {/* card details components */}
        <CardDetails
          title={data.title}
          details={details}
          highlight={mainHighlight}
        />
        {/* rating component */}
        <div className="flex flex-col min-h-[225px] max-h-max w-[250px] max-sm:w-full justify-between items-center">
          <RatingCard rating={rating} ratingType={ratingType} />
          <div className="w-full">
            <button className="bg-[#1B88F4] w-[232px] rounded-xl text-white h-[48px] max-sm:w-full">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
