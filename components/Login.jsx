import React from "react";
import Logo from "../public/images/logo.png";
import GoogleLogo from "../public/images/google-logo.png";
import Image from "next/future/image";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const login = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <div className=" w-full h-screen overflow-hidden bg-[#1a191925] flex justify-center items-center flex-col space-y-10">
      <div className="flex items-center space-x-4">
        <Image
          src={Logo}
          width={100}
          height={100}
          priority={true}
          quality={100}
          alt=""
        />
        <h1 className="text-5xl font-bold">Telegram Web</h1>
      </div>
      <div>
        <button
          className=" flex items-center justify-center text-3xl bg-yellow-50 text-black px-5 py-2 rounded-full hover:bg-[#7c7b7be2] hover:text-white transition-colors font-semibold space-x-3"
          onClick={login}
        >
          <Image
            src={GoogleLogo}
            width={40}
            height={40}
            priority={true}
            quality={100}
            alt=""
          />
          <span>Login with google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
