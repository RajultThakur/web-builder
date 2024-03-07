import React from "react";
import { ChevronRight } from "lucide-react";
function Hosting() {
  // with the help of this array we can also navigate to particular route by clicking them.
  const hosts = ["Home", "Hosting for All", "Hosting", "Hosting6", "Hosting5"];
  return (
    <div className="flex mt-2 justify-start items-center gap-0 h-[36px]">
      {hosts.map((host, index) => {
        return (
          <>
            <p
              key={index}
              className="flex cursor-pointer items-center justify-center text-[14px]/[20px] "
            >
              {host}{" "}
            </p>
            {index !== hosts.length - 1 && (
              <ChevronRight className="text-gray-400" />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Hosting;
