import { Button } from "@/modules/core/ui/button";
import { H3, H4 } from "@/modules/core/ui/typography";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import bg from "@/../public/main-bg.png";

export default function Greeting() {
  const t = useTranslations("greeting");
  // <Link href={t(`${button}.href`)}>{t(`${button}.text`)}</Link>
  const messages = useMessages();

  return (
    <div
      className={`min-h-svh relative pt-[70px] px-5 flex flex-col justify-center text-center rounded-b-[1.5rem]`}
    >
      <Image
        // width={1920}
        alt="Background Image"
        quality={100}
        placeholder="blur"
        blurDataURL={bg.blurDataURL}
        // height={1080}
        fill
        src={bg.src}
        className="absolute w-full h-full left-0 right-0 top-0 bottom-0 z-[-20] rounded-b-[1.5rem]"
      ></Image>
      <H3 className="w-fit ">{t("h3")}</H3>
      <H4 className="font-normal mt-4">{t("h4")}</H4>
      <div className="flex flex-col gap-3 mt-8">
        {typeof messages.greeting === "object" &&
          Array.isArray(messages.greeting.links) &&
          messages.greeting.links.map(
            (item: { text: string; href: string }) => {
              return (
                <Button variant="dark" key={item.text}>
                  <Link href={item.href}>{item.text}</Link>
                </Button>
              );
            }
          )}
      </div>
    </div>
  );
}
