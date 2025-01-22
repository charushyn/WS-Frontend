"use client";

import { Button } from "@/modules/core/ui/button";
import { H4 } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import bg from "@/../public/main-bg.png";
import { ReactTyped } from "react-typed";

export default function Greeting() {
  const t = useTranslations("greeting");
  // <Link href={t(`${button}.href`)}>{t(`${button}.text`)}</Link>
  const messages = useMessages();

  return (
    <div
      className={`min-h-svh relative pt-[70px] px-5 t-m:px-10 flex flex-col justify-center text-center rounded-b-[1.5rem]`}
    >
      <Image
        alt="Background Image"
        quality={100}
        placeholder="blur"
        blurDataURL={bg.blurDataURL}
        fill
        src={bg.src}
        className="absolute w-full h-full left-0 right-0 top-0 bottom-0 z-[-20] rounded-b-[1.5rem]"
      ></Image>
      <h1 className="min-h-[4rem] t-s:min-h-[2rem]">
        <ReactTyped
          className="scroll-m-20 text-2xl t-l:font-[500] t-m:text-3xl t-x:text-4xl tracking-tight font-[600]"
          strings={[t("h1")]}
          typeSpeed={100}
          loop
        />
      </h1>
      <H4 className="mt-4 font-[600]">{t("h4")}</H4>
      <div className="flex flex-col t-s:gap-5 gap-3 mt-8 t-s:flex-row t-s:justify-center">
        {typeof messages.greeting === "object" &&
          Array.isArray(messages.greeting.links) &&
          messages.greeting.links.map(
            (item: { text: string; href: string }) => {
              return (
                <Button variant="dark" className="t-s:w-fit" key={item.text}>
                  <Link href={item.href}>{item.text}</Link>
                </Button>
              );
            }
          )}
      </div>
    </div>
  );
}
