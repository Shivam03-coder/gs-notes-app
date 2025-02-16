import { type Metadata } from "next";
import "@/styles/globals.css";
import { appfonts } from "@/fonts";
import AppProvider from "@/components/providers/app-providers";
import ClerkAppProvider from "@/components/providers/clerk-app-provider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "GS-NOTES",
  description: "A NOTE APP FOR SGSITS STUDENT",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkAppProvider>
      <html lang="en" className={appfonts}>
        <body>
          <TRPCReactProvider>
            <AppProvider>{children}</AppProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkAppProvider>
  );
}
