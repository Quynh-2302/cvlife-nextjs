"use client";
import React from "react";

import FundMutualCarousel from "./components/FundMutualCarousel";

const FundMutualSection = () => {
  return (
    <div className="container flex flex-col space-y-20 py-[3.75rem] lg:py-[6.2rem] mx-auto">
      <div className="text-center text-[2.5rem] font-bold leading-normal text-[#181818] lg:text-[3rem]">
        ourMutualFundProducts
      </div>

      <FundMutualCarousel />
    </div>
  );
};

export default FundMutualSection;
