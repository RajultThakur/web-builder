import React from "react";
import ReactStars from "react-rating-stars-component";

function RatingCard({ rating, ratingType }) {
  return (
    <div className="flex items-center flex-col">
      <p>{rating}</p>
      <p>{ratingType}</p>
      <ReactStars
        count={5}
        value={rating}
        isHalf={true}
        // onChange={ratingChanged}
        size={28}
        activeColor="#ffb700"
      />
    </div>
  );
}

export default RatingCard;
