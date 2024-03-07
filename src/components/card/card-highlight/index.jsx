import React from "react";
import Highlight from "./Highlight";

function HighlightCard({ classes = "", indexes = [], titles }) {
  return (
    <div
      className={`${classes}  flex items-start flex-col justify-around h-[116px]`}
    >
      {indexes.map((index, ind) => {
        return <Highlight key={ind} number={index} title={titles[ind]} />;
      })}
    </div>
  );
}

export default HighlightCard;
