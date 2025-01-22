"use client";

import { H2, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { FAQType } from "../types/FAQType";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/core/ui/accordion";

export default function FAQ() {
  const t = useTranslations("faq");
  const messages = useMessages();

  return (
    <div
      className="flex flex-col rounded-3xl text-center px-5 my-12 gap-5 t-m:px-10 t-m:w-[70%] t-m:mx-auto"
      id="faq"
    >
      <P>{t("subtitle")}</P>
      <H2 className="font-[700]">
        {typeof messages.faq === "object" &&
          Array.isArray(messages.faq.title) &&
          messages.faq.title.map(
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
      <P className="text-[#00000080] font-[700]">{t("subsubtitle")}</P>
      <div className="flex flex-col gap-5 mt-10 text-left">
        {typeof messages.faq === "object" &&
          Array.isArray(messages.faq.items) &&
          messages.faq.items.map((item: FAQType) => {
            return (
              <Accordion
                key={item.question}
                type="single"
                collapsible
                className="bg-white rounded-[1.5rem] px-4 pt-2"
              >
                <AccordionItem value={item.question}>
                  <AccordionTrigger className="font-[700] text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-[700] text-[#00000080] text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
}
