"use client";

import { H4, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { WhyWeCardType } from "../types/WhyWeCardType";
import WhyWeCard from "../ui/WhyWeCard";

export default function WhyWe() {
  const t = useTranslations("whywe");
  const messages = useMessages();

  return (
    <div className="flex flex-col min-h-svh rounded-3xl text-center px-5 my-10">
      <P>{t("subtitle")}</P>
      <H4>
        {typeof messages.whywe === "object" &&
          Array.isArray(messages.whywe.title) &&
          messages.whywe.title.map(
            (item: { text: string; className: string }) => {
              return (
                <span
                  key={item.text}
                  className={`${item.className}`}
                  style={{
                    color: item.className,
                  }}
                >
                  {item.text}
                </span>
              );
            }
          )}
      </H4>
      <div className="flex flex-col gap-10 mt-10">
        {typeof messages.whywe === "object" &&
          Array.isArray(messages.whywe.items) &&
          messages.whywe.items.map((item: WhyWeCardType) => {
            return <WhyWeCard key={item.title} data={item}></WhyWeCard>;
          })}
      </div>
    </div>
  );
}
