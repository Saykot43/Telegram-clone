import Image from "next/future/image";
import React from "react";
import DefaultImage from "../public/images/default.png";

const Card = ({ name, imageUrl }) => {
  return (
    <div className=" flex w-full items-center py-3 px-5 border-b rounded-xl border-[#2b2b2b] space-x-5  cursor-pointer hover:bg-[#131212]">
      <div className=" border rounded-full w-[55px] h-[55px] overflow-hidden">
        <Image
          src={imageUrl}
          width={55}
          height={55}
          priority={true}
          quality={100}
          alt=""
        />
      </div>
      <span className=" text-white">{name}</span>
    </div>
  );
};

export default Card;
