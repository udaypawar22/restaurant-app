import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="group w-full h-[60vh] sm:w-1/2 lg:w-1/3 border-r border-b p-4 flex flex-col justify-between even:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="w-fit text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden">${item.price}</h2>
            <button className="hidden group-hover:block uppercase text-lg bg-red-500 text-white py-1 px-3 shadow">
              +
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
