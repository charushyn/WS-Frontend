import { getImg } from "@/modules/core/lib/utils";
import { ServiceCardType } from "../types/ServiceCardType";
import { H4, P } from "@/modules/core/ui/typography";

export default function ServiceCard({ data }: { data: ServiceCardType }) {
  return (
    <div className="flex flex-col items-center bg-[#F0F0F0] rounded-3xl px-5 pt-5 pb-8">
      {getImg(data.icon, "w-[100px] h-fit")}
      <H4 className="pt-4">{data.title}</H4>
      <P className="line-clamp-4">{data.description}</P>
    </div>
  );
}
