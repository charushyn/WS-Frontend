"use client";

// import Logo from "../ui/logo";
import logoSVG from "@/../public/logo.svg";
import burgerSVG from "@/../public/burger.svg";
import useScrollDirection from "../hooks/useScrollDirection";
import Image from "next/image";
import { AppSheet } from "./AppSheet";
import React from "react";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const [toggleSheet, setToggleSheet] = React.useState(false);

  return (
    <header
      className={`fixed z-[20] w-full transition-all duration-500 px-5 py-6 bg-white/5 backdrop-blur-xl ${
        scrollDirection === "down" ? "-top-[80px]" : "top-0"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <Image
          src={logoSVG.src}
          width={0}
          height={0}
          className="w-1/3"
          alt="10"
        ></Image>
        <Image
          src={burgerSVG.src}
          onClick={() => {
            setToggleSheet(true);
          }}
          width={0}
          height={0}
          className="w-fit h-fit"
          alt="10"
        ></Image>
      </div>
      <AppSheet
        open={toggleSheet}
        toggleFn={() => setToggleSheet(!toggleSheet)}
      ></AppSheet>
    </header>
  );
}
