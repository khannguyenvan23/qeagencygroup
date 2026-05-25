import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QEAgency | Digital Growth Agency",
  description:
    "QEAgency helps brands grow through strategy, content, design, technology, advertising and KOL/KOC campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
