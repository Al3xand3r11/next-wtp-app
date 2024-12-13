import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css"

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What's The Play",
  description: "Next generation of sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={darkerGrotesque.className}>{children}</body>
    </html>
  );
}
