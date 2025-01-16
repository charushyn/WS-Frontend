"use client";

import { H4, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { PortfolioCardType } from "../types/PortfolioCardType";
import PortfolioCard from "../ui/PortfolioCard";
import { Button } from "@/modules/core/ui/button";
import Link from "next/link";

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const messages = useMessages();
  return (
    <div className="text-center px-5 pt-5 mb-10 flex flex-col gap-2">
      <P>{t("h4")}</P>
      <H4 className="">
        {typeof messages.portfolio === "object" &&
          Array.isArray(messages.portfolio.h3) &&
          messages.portfolio.h3.map(
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
      <div className="grid grid-cols-1 gap-12 mt-10">
        {typeof messages.portfolio === "object" &&
          Array.isArray(messages.portfolio.items) &&
          messages.portfolio.items.map((item: PortfolioCardType) => {
            return <PortfolioCard key={item.title} data={item}></PortfolioCard>;
          })}
        {typeof messages.portfolio === "object" &&
          Array.isArray(messages.portfolio.items) &&
          messages.portfolio.items.length >= 3 && (
            <Button className="relative">
              <Link
                className="absolute flex items-center justify-center w-full h-full z-[1] text-center"
                href={t("button.href")}
              >
                {t("button.text")}
              </Link>
            </Button>
          )}
      </div>
    </div>
  );
}
