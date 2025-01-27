import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

import { cookies } from "next/headers";

import { getTranslations } from "next-intl/server";
import { Toaster } from "@/modules/core/ui/toaster";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE");

  const locale = lang?.value ? lang.value : "en";

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: "ICDEV",
    description: t("description"),
  };
}

import {} from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  );
}
