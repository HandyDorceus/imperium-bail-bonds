import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair', weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Imperium Bail Bonds - Get Your Loved Ones Home",
  description: "Professional bail bond services helping families reunite. Fast, reliable, and compassionate service available 24/7.",
  keywords: ["bail bonds", "bail bondsman", "get out of jail", "bail services", "family reunification"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
