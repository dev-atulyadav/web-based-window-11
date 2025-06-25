import React from "react";
import Image from "next/image";
import Bg1 from "@/assets/bg-1.jpg";
import Clock from "./Clock";
import LockscreenWidget from "./widget/LockscreenWidget";

const Lockscreen = () => {
  return (
    <section className="h-screen w-screen relative flex flex-col items-center justify-between p-20">
      <Image
        src={Bg1}
        alt="bg-1"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex h-full w-full flex-col items-center justify-between relative z-10">
        <Clock />
        <LockscreenWidget />
      </div>
    </section>
  );
};

export default Lockscreen;
