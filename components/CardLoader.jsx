import Image from "next/future/image";
import React from "react";

const CardLoader = () => {
  return (
    <div className="  py-3 px-5 border-b rounded-xl border-[#2b2b2b] hover:bg-[#131212] space-y-2">
      <div className=" w-full h-[15px] bg-[#fff] animate-pulse"></div>
      <div className=" w-[80%] h-[13px] bg-[#e4cbcb] animate-pulse"></div>
      <div className=" w-[90%] h-[12px] bg-[#969393] animate-pulse"></div>
      <div className=" w-[70%] h-[10px] bg-[#a89c9c] animate-pulse"></div>
    </div>
  );
};

export default CardLoader;
