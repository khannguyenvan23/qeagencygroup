import type { Metadata } from "next";
import { createMetadata, organizationJsonLd } from "./seo";
import "./globals.css";

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
      <body>
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
