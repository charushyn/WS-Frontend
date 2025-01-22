"use client";

import { H2, H4 } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import { PortfolioCardType } from "../types/PortfolioCardType";
import PortfolioCard from "../ui/PortfolioCard";
// import { Button } from "@/modules/core/ui/button";
// import Link from "next/link";

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const messages = useMessages();
  return (
    <div
      className="flex flex-col text-center px-5 pt-5 mb-10 gap-2 t-m:px-10"
      id="portfolio"
    >
      <H4>{t("h4")}</H4>
      <H2 className="font-[700]">
        {typeof messages.portfolio === "object" &&
          Array.isArray(messages.portfolio.h1) &&
          messages.portfolio.h1.map(
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
      <div className="grid grid-cols-1 gap-12 mt-10 t-x:grid-cols-2 t-x:gap-6 d-s:grid-cols-3">
        {typeof messages.portfolio === "object" &&
          Array.isArray(messages.portfolio.items) &&
          messages.portfolio.items.map((item: PortfolioCardType) => {
            return <PortfolioCard key={item.title} data={item}></PortfolioCard>;
          })}
      </div>
      {/* {typeof messages.portfolio === "object" &&
        Array.isArray(messages.portfolio.items) &&
        messages.portfolio.items.length >= 3 && (
          <Button className="relative t-s:w-fit mx-auto t-s:px-10 mt-12">
            <Link
              className="absolute flex items-center justify-center w-full h-full z-[1] text-center"
              href={t("button.href")}
            ></Link>
            {t("button.text")}
          </Button>
        )} */}
    </div>
  );
}
