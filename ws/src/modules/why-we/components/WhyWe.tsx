"use client";

import { H2, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { WhyWeCardType } from "../types/WhyWeCardType";
import WhyWeCard from "../ui/WhyWeCard";

export default function WhyWe() {
  const t = useTranslations("whywe");
  const messages = useMessages();

  return (
    <div className="flex flex-col rounded-3xl text-center px-5 my-10 t-m:p-12 gap-4">
      <P>{t("subtitle")}</P>
      <H2>
        {typeof messages.whywe === "object" &&
          Array.isArray(messages.whywe.h1) &&
          messages.whywe.h1.map((item: { text: string; className: string }) => {
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
          })}
      </H2>
      <div className="flex flex-col gap-10 mt-10 t-m:grid t-m:grid-cols-3 t-m:gap-5">
        {typeof messages.whywe === "object" &&
          Array.isArray(messages.whywe.items) &&
          messages.whywe.items.map((item: WhyWeCardType, index: number) => {
            return (
              <WhyWeCard
                className={index === 1 ? "t-m:relative t-m:top-8" : ""}
                key={item.title}
                data={item}
              ></WhyWeCard>
            );
          })}
      </div>
    </div>
  );
}
