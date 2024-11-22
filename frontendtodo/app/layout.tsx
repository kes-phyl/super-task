import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo List",
  description: "A list of item you should get on!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#152238] text-[#F2F0EF]">
        {children}
      </body>
    </html>
  );
}
