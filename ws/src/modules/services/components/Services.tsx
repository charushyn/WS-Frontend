"use client";

import { H2, H4 } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { ServiceCardType } from "../types/ServiceCardType";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  const t = useTranslations("services");
  const messages = useMessages();

  return (
    <div
      className="flex flex-col gap-5 bg-white rounded-3xl text-center px-5 py-10 t-m:px-10"
      id="services"
    >
      <H4>{t("title")}</H4>
      <H2 className="font-[700]">
        {typeof messages.services === "object" &&
          Array.isArray(messages.services.h1) &&
          messages.services.h1.map(
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
      </H2>
      <div className="flex flex-col gap-10 mt-10 t-m:grid t-m:grid-cols-3 t-m:gap-5">
        {typeof messages.services === "object" &&
          Array.isArray(messages.services.items) &&
          messages.services.items.map((item: ServiceCardType) => {
            return <ServiceCard key={item.title} data={item}></ServiceCard>;
          })}
      </div>
    </div>
  );
}
