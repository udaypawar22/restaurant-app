"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return <></>;
  }

  return (
    <Countdown
      date={new Date("2023-10-29")}
      className="font-bold text-xl md:text-5xl text-yellow-300"
    />
  );
};

export default CountDown;
