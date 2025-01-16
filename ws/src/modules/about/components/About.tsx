import { H4, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const messages = useMessages();
  return (
    <div
      className="bg-white py-10 px-5 rounded-[1.5rem] text-center gap-6 flex flex-col"
      id="about"
    >
      <P>{t("subtitle")}</P>
      <H4>
        {typeof messages.about === "object" &&
          Array.isArray(messages.about.title) &&
          messages.about.title.map(
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
      <P>{t("description")}</P>
      <Image
        alt={t("subtitle")}
        src={t("image-href")}
        width={1920}
        height={1080}
        className=" object-cover object-center h-[420px] rounded-[72px]"
      ></Image>
    </div>
  );
}
