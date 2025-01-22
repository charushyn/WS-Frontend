"use client";

// import Logo from "../ui/logo";
import logoSVG from "@/../public/logo.svg";
import burgerSVG from "@/../public/burger.svg";
import useScrollDirection from "../hooks/useScrollDirection";
import Image from "next/image";
import { AppSheet } from "./AppSheet";
import React from "react";
import { useMessages } from "next-intl";
import { NavItem } from "../types/navItem";
import { P } from "../ui/typography";
import { getImg } from "../lib/utils";
import getCookie from "../lib/getLang";
import { Lang } from "../types/lang";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/modules/core/ui/popover";
import langs from "../data/langs";
import Link from "next/link";
import { clientUrl } from "../data/urls";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const messages = useMessages();
  const [toggleSheet, setToggleSheet] = React.useState(false);
  const [lang, setLang] = React.useState<Lang>();

  React.useEffect(() => {
    const settingLang = async () => setLang(await getCookie());

    settingLang();
  }, []);

  return (
    <header
      className={`fixed z-[20] w-full transition-all duration-500 px-5 py-6 bg-white bg-opacity-10 backdrop-blur-xl t-x:backdrop-blur-2xl rounded-b-[1.5rem] t-m:px-10 t-x:w-[80%] t-x:inset-x-0 t-x:mx-auto ${
        scrollDirection === "down" ? "-top-[80px]" : "top-0"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="relative">
          <Image
            src={logoSVG.src}
            priority
            width={0}
            height={0}
            className="w-12 h-12 bg-opacity-0"
            alt="Logo"
          ></Image>
          <Link
            className="w-full h-full absolute cursor-pointer top-0 right-0 left-0 bottom-0"
            href={"#top"}
          ></Link>
        </div>

        <Image
          src={burgerSVG.src}
          onClick={() => {
            setToggleSheet(true);
          }}
          width={0}
          height={0}
          className="w-9 h-9 t-x:hidden"
          alt="10"
        ></Image>
        <div className="hidden flex-row t-x:flex gap-12">
          {typeof messages.header === "object" &&
            Array.isArray(messages.header.nav) &&
            messages.header.nav.map((item: NavItem) => {
              return (
                <div key={item.text} className="hover-underline-animation left">
                  <a
                    href={item.href}
                    className="flex flex-row items-center gap-2"
                  >
                    <P className="">{item.text}</P>
                  </a>
                </div>
              );
            })}
          {lang && (
            <Popover>
              <PopoverTrigger className="flex flex-row w-fit gap-2 items-center justify-center">
                {getImg(lang, "w-10 h-6 border")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2 text-center">
                <P className="font-[700]">Choose language you prefer:</P>
                {langs.map((item: Lang) => {
                  return (
                    <div
                      className="relative flex flex-row justify-center items-center gap-2 cursor-pointer w-fit"
                      key={item}
                    >
                      {getImg(item, "w-10 h-6 border")}
                      <P className="underline uppercase">{item}</P>
                      <Link
                        href={`${clientUrl}/${item}`}
                        className="absolute w-full h-full"
                      ></Link>
                    </div>
                  );
                })}
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
      {/* nav on t-x+*/}

      <AppSheet
        open={toggleSheet}
        toggleFn={() => setToggleSheet(!toggleSheet)}
      ></AppSheet>
    </header>
  );
}
