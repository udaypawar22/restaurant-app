"use client";

import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center gap-4 p-6 md:gap-8">
        <h1 className="text-white text-2xl font-bold md:text-5xl xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white text-sm font-medium shadow py-2 px-3 lg:py-3 lg:px-8">
          Order Now
        </button>
      </div>
      <div className="relative flex-1 w-full md:h-full">
        <Image
          src={"/offerProduct.png"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
