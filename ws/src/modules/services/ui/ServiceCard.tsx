import { getImg } from "@/modules/core/lib/utils";
import { ServiceCardType } from "../types/ServiceCardType";
import { H4, P } from "@/modules/core/ui/typography";

export default function ServiceCard({ data }: { data: ServiceCardType }) {
  return (
    <div className="flex flex-col items-center bg-[#F0F0F0] rounded-3xl px-5 pt-5 pb-8 t-s:p-12 t-m:p-6">
      <div className="flex justify-center items-center w-[50px] m-m:w-[80px] h-[50px] m-m:min-h-[80px]">
        {getImg(data.icon, "h-full w-full")}
      </div>
      <div className="flex flex-col gap-2 t-s:gap-4 h-full justify-between">
        <H4 className="pt-4 font-[700]">{data.title}</H4>
        <P className="line-clamp-4 font-[700] text-[#00000080]">
          {data.description}
        </P>
      </div>
    </div>
  );
}
