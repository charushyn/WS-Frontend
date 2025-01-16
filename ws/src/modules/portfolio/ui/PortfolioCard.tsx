import { H4, P } from "@/modules/core/ui/typography";
import { PortfolioCardType } from "../types/PortfolioCardType";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ data }: { data: PortfolioCardType }) {
  return (
    <div className="flex flex-col gap-4 relative">
      {data.warnings.length === 0 && (
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
        className="w-full h-[170px] object-cover rounded-[1.5rem] object-center"
        src={data.images[0]}
        alt={data.title}
      ></Image>
      <H4 className="font-[700]">{data.title}</H4>
      <P className=" text-[#00000080] font-[700]">{data.description}</P>
    </div>
  );
}
