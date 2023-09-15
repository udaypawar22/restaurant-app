import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      <div className="h-full p-4 flex flex-col justify-center overflow-y-scroll custom-scrollbar lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <Image src={"/temporary/p1.png"} alt="" width={80} height={80} />
            <div className="">
              <h1 className="uppercase font-bold">Sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="text-sm font-bold cursor-pointer">$59.91</h2>
            <span>X</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <Image src={"/temporary/p1.png"} alt="" width={80} height={80} />
            <div>
              <h1 className="uppercase font-bold">Sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="text-sm font-bold cursor-pointer">$59.91</h2>
            <span>X</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <Image src={"/temporary/p1.png"} alt="" width={80} height={80} />
            <div>
              <h1 className="uppercase font-bold">Sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="text-sm font-bold cursor-pointer">$59.91</h2>
            <span>X</span>
          </div>
        </div>
      </div>
      <div className="h-full p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-30 2xl:texl-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service cost</span>
          <span className="">$10.0</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">Total</span>
          <span className="font-bold">$90.0</span>
        </div>
        <button className="bg-red-500 text-white p-3 w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
