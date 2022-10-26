import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import Image from "next/future/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import DefaultImage from "../public/images/default.png";

const Card = ({ name, imageUrl, email, id }) => {
  const [user, loading] = useAuthState(auth);

  const addChat = async () => {
    await setDoc(
      doc(db, "chats", `chats-${user.uid} ${id}`),
      {
        user: [user?.email, email],
      },
      { merge: true }
    );
    alert("chat added");
  };

  return (
    <div
      className=" flex w-full items-center py-3 px-5 border-b rounded-xl border-[#2b2b2b] space-x-5  cursor-pointer hover:bg-[#131212]"
      onClick={addChat}
    >
      <div className=" rounded-full w-[55px] h-[55px] overflow-hidden">
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
