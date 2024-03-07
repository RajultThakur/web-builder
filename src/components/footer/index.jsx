import React from "react";
import List from "./list";

function Footer() {
  return (
    <div className="w-full flex justify-around items-center h-[452px] bg-[#212731]        ">
      <List />
      <List />
      <div>
        <select
          className="bg-transparent text-[#ffffff] text-[13px]/[20px] outline-none"
          name="cars"
          id="cars"
        >
          <option value="Top Relevant">Top Relevant</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
