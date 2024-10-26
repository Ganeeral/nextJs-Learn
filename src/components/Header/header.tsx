"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-center">
      <header className="absolute top-0 z-20 flex w-full items-center justify-between max-w-[1300px] mx-auto py-6 px-16">
        <div className="flex gap-x-16 items-center">
          <Link className="text-[#0009EA]" href="#">
            О нас
          </Link>
          <Link className="text-black" href="/catalog">
            Каталог
          </Link>
          <Link className="text-black" href="/users">
            Пользователи
          </Link>
        </div>

        <Image src="/images/logo.svg" width={100} height={100} alt="Logo" />

        <div className="flex gap-x-5">
          <button className="px-6 py-2 bg-[#232323] text-white">
            Регистрация
          </button>
          <button className="px-6 py-2 bg-[#0009EA] text-white">Вход</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
