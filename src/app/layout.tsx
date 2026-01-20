import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({ 
  subsets: ["arabic"],
  weight: ['200', '300', '400', '500', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "منصة السباك المحترف | سباكك في خدمتك",
  description: "اطلب سباك محترف وموثوق في دقائق. خدمتنا سريعة، أسعارنا شفافة، وضماننا أكيد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
