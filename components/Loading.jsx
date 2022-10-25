import Image from "next/future/image";
import React from "react";
import Loader from "../public/gifs/Loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden bg-[#161621]">
      <Image
        src={Loader}
        width={200}
        height={200}
        className=" w-full"
        priority={true}
        quality={100}
        alt="Profile"
      />
    </div>
  );
};

export default Loading;
