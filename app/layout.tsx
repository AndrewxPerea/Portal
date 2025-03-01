import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"


import "./globals.css";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Companies | Andrewx",
  description: "Portal Empleados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>
        <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
