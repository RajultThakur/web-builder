import React from "react";
import { Search } from "lucide-react";
function Navbar() {
  return (
    <div className="bg-[#212731] w-[100%] min-h-[64px] max-sm:min-h-[80px] flex justify-evenly items-center max-sm:flex-col xl:px-[284px] md:px-[10%] max-md:flex-col">
      <div className="max-sm:flex-1 max-sm:p-2">
        <Search className="absolute top-4 text-gray-400" />
        <input
          className="w-[258px] max-sm:w-full outline-none border-[1px] pl-[25px] p-[4px] text-gray-400 border-[#E1E4E6] rounded-lg"
          type="text "
          placeholder=""
        />
      </div>
      <div className="cursor-pointer text-[#D1D6DA] flex justify-center items-center gap-[50px] max-sm:gap-[18px] max-sm:[20px] max-sm:mb-2 size-[12px] lg:text[14px] w-max  ">
        <p className="hover:underline whitespace-nowrap">Category</p>
        <p className="hover:underline whitespace-nowrap">Website Builder</p>
        <p className="hover:underline whitespace-nowrap">Today's deals</p>
      </div>
    </div>
  );
}

export default Navbar;
