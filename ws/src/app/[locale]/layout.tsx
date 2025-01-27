import DefaultLayout from "@/modules/core/layouts/DefaultLayout";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ReduxProvider from "@/modules/core/providers/ReduxProvider";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: "pl" | "bl" | "ua" | "en" | "ru" }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ReduxProvider>
        <DefaultLayout>{children}</DefaultLayout>
      </ReduxProvider>
    </NextIntlClientProvider>
  );
}
