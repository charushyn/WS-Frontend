import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImgName } from "../types/imgName";
import Image from "next/image";

import b from "@/../public/b.svg";
import bl from "@/../public/bl.jpg";
import box from "@/../public/box.svg";
import burger from "@/../public/burger.svg";
import dot from "@/../public/dot.svg";
import e from "@/../public/e.svg";
import en from "@/../public/en.svg";
import f from "@/../public/f.svg";
import globe from "@/../public/globe.svg";
import headCheckmark from "@/../public/head-checkmark.svg";
import i from "@/../public/i.svg";
import logo from "@/../public/logo.svg";
import mainBg from "@/../public/main-bg.png";
import n from "@/../public/n.svg";
import o from "@/../public/o.svg";
import pl from "@/../public/pl.png";
import ru from "@/../public/ru.webp";
import s from "@/../public/s.svg";
import shield from "@/../public/shield.svg";
import squers from "@/../public/squers.svg";
import u from "@/../public/u.svg";
import ua from "@/../public/ua.webp";
import w from "@/../public/w.svg";
import web from "@/../public/web.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImg(value: ImgName, className: string) {
  switch (value) {
    case "b":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={b.src}
          className={cn("", className)}
        ></Image>
      );
    case "bl":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={bl.src}
          className={cn("", className)}
        ></Image>
      );
    case "box":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={box.src}
          className={cn("", className)}
        ></Image>
      );
    case "burger":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={burger.src}
          className={cn("", className)}
        ></Image>
      );
    case "dot":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={dot.src}
          className={cn("", className)}
        ></Image>
      );
    case "e":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={e.src}
          className={cn("", className)}
        ></Image>
      );
    case "en":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={en.src}
          className={cn("", className)}
        ></Image>
      );
    case "f":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={f.src}
          className={cn("", className)}
        ></Image>
      );
    case "globe":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={globe.src}
          className={cn("", className)}
        ></Image>
      );
    case "head-checkmark":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={headCheckmark.src}
          className={cn("", className)}
        ></Image>
      );
    case "i":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={i.src}
          className={cn("", className)}
        ></Image>
      );
    case "logo":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={logo.src}
          className={cn("", className)}
        ></Image>
      );
    case "main-bg":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={mainBg.src}
          className={cn("", className)}
        ></Image>
      );
    case "n":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={n.src}
          className={cn("", className)}
        ></Image>
      );
    case "o":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={o.src}
          className={cn("", className)}
        ></Image>
      );
    case "pl":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={pl.src}
          className={cn("", className)}
        ></Image>
      );
    case "ru":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={ru.src}
          className={cn("", className)}
        ></Image>
      );
    case "s":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={s.src}
          className={cn("", className)}
        ></Image>
      );
    case "shield":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={shield.src}
          className={cn("", className)}
        ></Image>
      );
    case "squers":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={squers.src}
          className={cn("", className)}
        ></Image>
      );
    case "u":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={u.src}
          className={cn("", className)}
        ></Image>
      );
    case "ua":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={ua.src}
          className={cn("", className)}
        ></Image>
      );
    case "w":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={w.src}
          className={cn("", className)}
        ></Image>
      );
    case "web":
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={web.src}
          className={cn("", className)}
        ></Image>
      );
    default:
      return (
        <Image
          alt={value}
          width={0}
          height={0}
          src={web.src}
          className={cn("", className)}
        ></Image>
      );
  }
}
