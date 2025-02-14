import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="underline decoration-sky-500">
          My Simple Website
        </header>
        <ErrorWrapper>{children}</ErrorWrapper>

        <main className={`${inter.className} } antialiased`}></main>
        <footer>&copy; 2025 My Website | All rights reserved</footer>
      </body>
    </html>
  );
}
