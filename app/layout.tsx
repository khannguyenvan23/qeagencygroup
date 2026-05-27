import type { Metadata } from "next";
import localFont from "next/font/local";
import { createMetadata, organizationJsonLd } from "./seo";
import "./globals.css";

const lato = localFont({
  src: [
    {
      path: "../brand-kit-QEAgency/Fonts/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../brand-kit-QEAgency/Fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../brand-kit-QEAgency/Fonts/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lato",
  display: "swap",
});

const josefinSans = localFont({
  src: [
    {
      path: "../brand-kit-QEAgency/Fonts/JosefinSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../brand-kit-QEAgency/Fonts/JosefinSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../brand-kit-QEAgency/Fonts/JosefinSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../brand-kit-QEAgency/Fonts/JosefinSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qeagencygroup.com"),
  ...createMetadata({
    title: "Digital Growth Agency",
    description:
      "QEAgency là đối tác tăng trưởng số kết hợp chiến lược, nội dung, thiết kế, công nghệ và quảng cáo hiệu suất cho doanh nghiệp.",
  }),
  applicationName: "QEAgency",
  authors: [{ name: "QEAgency" }],
  creator: "QEAgency",
  publisher: "QEAgency",
  keywords: [
    "QEAgency",
    "digital agency",
    "marketing strategy",
    "performance marketing",
    "thiết kế website",
    "quảng cáo hiệu suất",
    "tăng trưởng số",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${lato.variable} ${josefinSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
