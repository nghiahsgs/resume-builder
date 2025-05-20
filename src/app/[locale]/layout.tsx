import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } else {
    setRequestLocale(locale);
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <TopNavBar />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
