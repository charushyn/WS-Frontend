"use client";

import { Button } from "@/modules/core/ui/button";
import { H1, H2, H3 } from "@/modules/core/ui/typography";
import Image from "next/image";
import Link from "next/link";
import bg from "@/../public/main-bg.png";

export default function NotFoundPage() {
  return (
    <div
      className={`min-h-svh relative px-5 flex flex-col justify-center items-center text-center rounded-b-[1.5rem] t-m:px-10`}
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
      <H1 className="underline">404</H1>
      <H2 className="font-[500]">Podana strona nie istnieje</H2>
      <H3 className="font-[500] mt-5">
        Twój internet działa jak należy, jednak najprawdopodobniej ta strona
        została przeniesiona pod inny adres. Dla pewności możesz sprawdzić czy
        adres internetowy nie zawiera literówki. Zapraszamy na stronę główną
        ICDEV.pl - zadziała na pewno!
      </H3>
      <Button className="relative z-[0] mt-4">
        <Link
          href={"/"}
          className="absolute w-full h-full z-[10]"
          replace
        ></Link>
        Na stronę główną
      </Button>
    </div>
  );
}
