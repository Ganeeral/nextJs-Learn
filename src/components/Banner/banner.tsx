"use client";

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/banner.jpeg"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 -z-10"
      />
    </div>
  );
};

export default Banner;
