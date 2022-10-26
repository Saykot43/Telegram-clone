import { addDoc, collection, setDoc, doc, query, where } from "firebase/firestore";
import Image from "next/future/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import DefaultImage from "../public/images/default.png";

const ChatCard = ({ chatData }) => {
//   console.log(chatData?.data()?.user)
  const [user, loading] = useAuthState(auth);

  const reciverEmail = chatData?.data()?.user?.filter(item=>item!==user?.email)?.[0];
//   console.log(reciverEmail);

  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", reciverEmail ));
  const [chatSnapShot, loading3] = useCollection(q);
//   console.log( chatSnapShot?.docs?.[0].data());

  const name= chatSnapShot?.docs?.[0].data()?.name;
  const photoUrl= chatSnapShot?.docs?.[0].data()?.photoURL;

  return (
    <div className=" flex w-full items-center py-3 px-5 border-b rounded-xl border-[#2b2b2b] space-x-5  cursor-pointer hover:bg-[#131212]">
      <div className=" rounded-full w-[55px] h-[55px] overflow-hidden">
        <Image
          src={ photoUrl || DefaultImage}
          width={55}
          height={55}
          priority={true}
          quality={100}
          alt=""
        />
      </div>
      <span className=" text-white">{ name|| "user"}</span>
    </div>
  );
};

export default ChatCard;
