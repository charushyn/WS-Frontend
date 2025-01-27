import { useMessages, useTranslations } from "next-intl";
import { P } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  const t = useTranslations("footer");
  const messages = useMessages();
  return (
    <div className="bg-white rounded-t-[1.5rem] py-12 px-5 flex flex-col gap-4 t-s:flex-row t-m:px-10 t-s:items-end t-s:justify-between">
      <div className="flex flex-col gap-4">
        <P className="font-[700]">{t("title")}</P>
        <P className="font-[700] text-[#00000080]">{t("subtitle")}</P>
        <div className="flex flex-col gap-2 underline">
          {typeof messages.footer === "object" &&
            Array.isArray(messages.footer.contact) &&
            messages.footer.contact.map(
              (item: { text: string; href: string }) => {
                return (
                  <Link key={item.text} href={item.href}>
                    {item.text}
                  </Link>
                );
              }
            )}
        </div>
      </div>
      <div className="flex flex-col gap-2 t-s:flex-row t-m:gap-6">
        {typeof messages.footer === "object" &&
          Array.isArray(messages.footer.sociallinks) &&
          messages.footer.sociallinks.map(
            (item: { text: string; href: string }) => {
              return (
                <Button key={item.text} className="relative w-[130px]">
                  {item.text}
                  <Link
                    key={item.text}
                    className="absolute w-full h-full flex justify-center items-center z-[1]"
                    href={item.href}
                  ></Link>
                </Button>
              );
            }
          )}
      </div>
    </div>
  );
}
