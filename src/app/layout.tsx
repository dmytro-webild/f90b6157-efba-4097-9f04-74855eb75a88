import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'BlackArtTech | Digital Art Innovation',
  description: 'Pioneering the future of digital expression with robust, scalable art technology.',
  openGraph: {
    "title": "BlackArtTech",
    "description": "Tools for the next generation of creative technologists.",
    "siteName": "BlackArtTech",
    "type": "website"
  },
};



const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
