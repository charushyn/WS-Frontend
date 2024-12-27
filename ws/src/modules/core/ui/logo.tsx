import Image from "next/image";

import f from "@/../public/f.svg";
import u from "@/../public/u.svg";
import s from "@/../public/s.svg";
import i from "@/../public/i.svg";
import o from "@/../public/o.svg";
import n from "@/../public/n.svg";
import dot from "@/../public/dot.svg";
import w from "@/../public/w.svg";
import e from "@/../public/e.svg";
import b from "@/../public/b.svg";

export default function Logo() {
  return (
    <div className="flex flex-row w-fit h-fit">
      <div className="flex flex-row">
        <Image
          src={f.src}
          width={0}
          height={0}
          alt=""
          className="w-fit h-[17px] "
        ></Image>
        <Image
          src={u.src}
          width={0}
          height={0}
          alt=""
          className="w-fit h-[17px] "
        ></Image>
        <Image
          src={s.src}
          width={0}
          height={0}
          alt=""
          className="w-fit h-[17px] "
        ></Image>
        <Image
          src={i.src}
          width={0}
          height={0}
          alt=""
          className="w-fit h-[17px] "
        ></Image>
        <Image
          src={o.src}
          width={0}
          height={0}
          alt=""
          className="w-fit h-[17px] "
        ></Image>
        <Image
          src={n.src}
          width={0}
          height={0}
          alt=""
          className="w-fit h-[17px] "
        ></Image>
      </div>
      <div className="flex flex-row">
        <Image src={dot.src} width={8} height={8} alt=""></Image>
        <Image src={w.src} width={8} height={8} alt=""></Image>
        <Image src={e.src} width={8} height={8} alt=""></Image>
        <Image src={b.src} width={8} height={8} alt=""></Image>
      </div>
    </div>
  );
}
