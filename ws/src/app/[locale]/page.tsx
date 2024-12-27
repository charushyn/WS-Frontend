import Greeting from "@/modules/greeting/components/Greeting";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("");
  return (
    <main>
      <Greeting></Greeting>
      <div>
        <h1>{t("welcome")}</h1>
      </div>
    </main>
  );
}
