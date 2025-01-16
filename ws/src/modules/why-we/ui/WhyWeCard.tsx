import { getImg } from "@/modules/core/lib/utils";
import { WhyWeCardType } from "../types/WhyWeCardType";
import { H4, P } from "@/modules/core/ui/typography";

export default function WhyWeCard({ data }: { data: WhyWeCardType }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-[1.5rem] px-5 pt-5 pb-8">
      {getImg(data.icon, "w-[50px] h-fit")}
      <H4 className="pt-4">{data.title}</H4>
      <P className="line-clamp-4">{data.description}</P>
    </div>
  );
}
