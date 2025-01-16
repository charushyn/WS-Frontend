import { Button } from "@/modules/core/ui/button";
import { H3, P } from "@/modules/core/ui/typography";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Banner() {
  const t = useTranslations("banner");
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b to-[#A5C6E0] from-[#0E4B8A] px-6 py-[110px] text-white text-center rounded-[1.5rem]">
      <H3>{t("title")}</H3>
      <P>{t("subtitle")}</P>
      <Button variant="secondary" className="relative mt-5">
        <Link
          href={t("button.href")}
          className="absolute w-full h-full flex justify-center items-center"
        >
          {t("button.text")}
        </Link>
      </Button>
    </div>
  );
}
