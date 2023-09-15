"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <div>
      {!open ? (
        <Image
          alt=""
          src="/open.png"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          alt=""
          src="/close.png"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className="bg-red-500 text-white absolute
       left-0 top-24 h-[calc(100vh-6rem)] w-full
        flex flex-col gap-8 justify-center items-center z-10"
        >
          {links.map((item) => (
            <Link onClick={() => setOpen(false)} href={item.url} key={item.id}>
              {item.title}
            </Link>
          ))}
          {user ? (
            <Link onClick={() => setOpen(false)} href={"/login"}>
              Login
            </Link>
          ) : (
            <Link onClick={() => setOpen(false)} href={"/orders"}>
              Orders
            </Link>
          )}
          <Link onClick={() => setOpen(false)} href={"/cart"}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
