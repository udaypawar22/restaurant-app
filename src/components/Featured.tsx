import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500 custom-scrollbar">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[100vh] flex flex-col items-center 
            justify-around p-4 md:p-10 md:w-[50vw] xl:w-[33vw]"
          >
            {item.img && (
              <div className="relative flex-1 w-full">
                <Image className="object-contain" src={item.img} alt="" fill />
              </div>
            )}

            <div className="flex flex-col gap-4 justify-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="my-2 line-clamp-3">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}$</span>
              <button
                className="font-medium border border-red-500 p-2 hover:bg-red-500 
              hover:text-white transition"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
