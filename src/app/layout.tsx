import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import AuthContextProvider from "@/providers/AuthContextProvider";

import { defaultMetadata } from "@/lib/seo/metadata";
import { personSchema, websiteSchema } from "@/lib/seo/schema";

import RegisterServiceWorker from "@/components/pwa/RegisterServiceWorker";
import OfflineBanner from "@/components/pwa/OfflineBanner";

import NetworkStatusProvider from "@/components/pwa/NetworkStatusProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        {/* Global Structured Data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <ReactQueryProvider>
          <AuthContextProvider>

            <OfflineBanner />
            <NetworkStatusProvider />
            
            {children}

            <RegisterServiceWorker />

            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </AuthContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}