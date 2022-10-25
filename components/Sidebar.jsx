import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/future/image";
import DefaultImage from "../public/images/default.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Sidebar = () => {
  const [user, loading] = useAuthState(auth);
//   console.log(user);
  const [search, setSearch] = useState("");
  return (
    <div className=" w-[600px] h-screen p-5 bg-[#191919]">
      <div className=" flex items-center w-full space-x-4">
        <div>
          <button className=" text-emerald-50 text-2xl group">
            <FiMenu />
            <div className=" w-[300px] rounded-b-xl rounded-tr-xl border border-[#333333] bg-[#0000006b] flex flex-col justify-center items-center backdrop-blur-sm -z-[1] opacity-0 absolute top-16 left-12 p-5 transition-all group-focus:z-[1] group-focus:opacity-100 ">
              <div className=" w-[100px] h-[100px] overflow-hidden border rounded-full">
                <Image
                  src={user?.photoURL}
                  width={100}
                  height={100}
                  alt="profile"
                />
              </div>
              <div className=" w-full ">
                <div className="w-full text-sm font-light py-2 capitalize">
                  {user?.displayName}
                </div>
                <div className="w-full text-sm font-light py-2 bg-[#706f6f42] hover:bg-[#0000003d] border border-[#cacaca] rounded-md capitalize">
                  Logout From your account
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className=" relative w-full flex items-center">
          <div className=" text-emerald-50 text-xl absolute  left-3">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            className=" border bg-transparent w-full px-10 py-2 rounded-full bg-[#222222] outline-none focus:border-[#cd71ff] text-white"
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          {search.length > 0 && (
            <div
              className=" text-emerald-50 text-xl absolute right-5 cursor-pointer"
              onClick={() => {
                setSearch("");
              }}
            >
              <IoMdClose />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;