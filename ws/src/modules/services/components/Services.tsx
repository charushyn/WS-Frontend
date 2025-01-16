"use client";

import { H4, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { ServiceCardType } from "../types/ServiceCardType";
import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  const t = useTranslations("services");
  const messages = useMessages();

  return (
    <div className="flex flex-col gap-5 min-h-svh bg-white rounded-3xl text-center px-5 py-10">
      <P>{t("title")}</P>
      <H4>
        {typeof messages.services === "object" &&
          Array.isArray(messages.services.description) &&
          messages.services.description.map(
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
        {typeof messages.services === "object" &&
          Array.isArray(messages.services.items) &&
          messages.services.items.map((item: ServiceCardType) => {
            return <ServiceCard key={item.title} data={item}></ServiceCard>;
          })}
      </div>
    </div>
  );
}
