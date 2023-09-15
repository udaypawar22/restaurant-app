import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex justify-between items-center border-b-2 uppercase lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="text-center text-lg md:font-bold flex-1">
        <Link href={"/"}>Magnifico</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex items-center gap-2 bg-orange-200 px-2 rounded-md md:absolute top-3 right-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 789</span>
        </div>
        {user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
