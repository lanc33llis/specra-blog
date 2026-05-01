import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blogs.specra.tech"),
  title: "Specra Blog",
  description:
    "Notes on design context, UI evaluation, and building product interfaces with AI coding agents.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={`${geist.className} bg-background text-foreground`}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
