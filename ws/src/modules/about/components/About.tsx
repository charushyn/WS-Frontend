import { H2, P } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const messages = useMessages();
  return (
    <div
      className="bg-white py-10 px-5 rounded-[1.5rem] text-center gap-6 flex flex-col t-m:px-10 t-m:gap-10 t-m:mx-10 t-x:grid t-x:grid-cols-[1fr_2fr] t-x:grid-rows-1"
      id="about"
    >
      <div className="flex flex-col gap-6 items-center justify-center t-x:col-start-2 t-x:col-end-3 t-x:row-start-1 t-x:row-end-2">
        <P>{t("subtitle")}</P>
        <H2>
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
        </H2>
        <P className="text-[#00000080] font-[700]">{t("description")}</P>
      </div>
      <div className="t-x:col-start-1 t-x:col-end-2 t-x:row-start-1 t-x:row-end-2">
        <Image
          alt={t("subtitle")}
          src={t("image-href")}
          width={1920}
          height={1080}
          className=" object-cover object-center rounded-[72px] t-s:h-[40svh] t-m:h-[50svh] d-s:h-[80svh]"
        ></Image>
      </div>
    </div>
  );
}
