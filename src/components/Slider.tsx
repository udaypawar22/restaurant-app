"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div
        className="flex flex-1 flex-col items-center 
      justify-center gap-1 text-red-500 font-bold lg:h-full"
      >
        <h1 className="text-center uppercase p-2 md:p-6 md:text-5xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="border border-red-500 py-1 px-4 md:py-2 md:px-8">
          Order Now
        </button>
      </div>
      <div className="w-full relative flex-1 flex flex-col gap-4">
        <Image
          className="object-cover"
          src={data[currentSlide].image}
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
