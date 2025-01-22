import { H4, P } from "@/modules/core/ui/typography";
import { PortfolioCardType } from "../types/PortfolioCardType";
import Image from "next/image";
import Link from "next/link";
import { FileWarning } from "lucide-react";

export default function PortfolioCard({ data }: { data: PortfolioCardType }) {
  return (
    <div className="flex flex-col gap-4 relative">
      {data.warnings.items.length === 0 && (
        <Link
          href={data.url}
          className="absolute w-full h-full"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
      )}
      <Image
        loading="lazy"
        priority={false}
        width={1920}
        height={1080}
        className={`w-full h-[170px] m-l:h-[200px] t-s:h-[250px] t-m:h-[270px] t-l:h-[320px] t-x:h-[280px] object-cover rounded-[1.5rem] object-center ${
          data.warnings.items.length !== 0 &&
          "border-orange-500 border-[2px] t-x:border-[4px]"
        }`}
        src={data.images[0]}
        alt={data.title}
      ></Image>
      {data.warnings.items.length !== 0 && (
        <FileWarning
          className="absolute top-4 right-4 text-orange-500"
          width={40}
          height={40}
        ></FileWarning>
      )}

      <H4 className="font-[700]">{data.title}</H4>
      <P className=" text-[#00000080] font-[700]">{data.description}</P>
    </div>
  );
}
