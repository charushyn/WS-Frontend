import { useMessages } from "next-intl";

import Image from "next/image";

import logoSVG from "@/../public/logo.svg";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { P } from "../ui/typography";
import { NavItem } from "../types/navItem";
import React from "react";
import { Lang } from "../types/lang";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import Link from "next/link";
import langs from "../data/langs";
import { clientUrl } from "../data/urls";
import { getImg } from "../lib/utils";
import getCookie from "../lib/getLang";

export function AppSheet({
  open,
  toggleFn,
}: {
  open: boolean;
  toggleFn: () => void;
}) {
  const messages = useMessages();

  const [lang, setLang] = React.useState<Lang>();

  React.useEffect(() => {
    const settingLang = async () => setLang(await getCookie());

    settingLang();
  }, []);

  return (
    <Sheet open={open} onOpenChange={() => toggleFn()}>
      <SheetContent className="rounded-l-[1.5rem]">
        <SheetHeader className="mb-6">
          <SheetTitle>
            <Image
              src={logoSVG.src}
              width={0}
              height={0}
              className="w-fit h-fit"
              alt="10"
            ></Image>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-10">
          {typeof messages.header === "object" &&
            Array.isArray(messages.header.nav) &&
            messages.header.nav.map((item: NavItem) => {
              return (
                <div key={item.text} className="">
                  <a
                    href={item.href}
                    className="flex flex-row items-center gap-2"
                    onClick={() => toggleFn()}
                  >
                    <P className=" underline">{item.text}</P>
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
              <PopoverContent className="flex flex-col gap-2 text-center bg-white p-4 rounded-[1.5rem] border-black border-[1px]">
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
      </SheetContent>
    </Sheet>
  );
}
