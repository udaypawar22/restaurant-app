import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 
    text-red-500 flex items-center justify-between gap-4"
    >
      <Link className="font-bold text-sm md:text-xl" href={"/"}>
        MAGNIFICO
      </Link>
      <span className="text-xs truncate md:text-base">
        © ALL RIGHTS RESERVED
      </span>
    </div>
  );
};

export default Footer;
