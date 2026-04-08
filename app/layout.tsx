import Header from "@/components/layout/header";
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const allianceNo2 = localFont({ 
  src: "../public/AllianceNo2.otf",
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const description = "Software Engineer, GPU Programmer, FullStack developer, and YouTuber based in Toronto.";
const title = "Nabil Mansour's Portfolio";
const author = "Nabil Mansour";

const MAIN_URL = "https://nabilmansour.com/";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | " + title,
  },
  description: description,
  alternates: {
    canonical: `${MAIN_URL}`
  },
  keywords: "Nabil Mansour, Software Developer, FullStack Developer, Portfolio, Toronto, GPU Programmer, Shaderman",
  openGraph: {
    title: title,
    description: description,
    url: `${MAIN_URL}`,
    type: "website",
    images: [
      {
        url: `${MAIN_URL}/treeBig.png`,
        alt: title,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${MAIN_URL}/treeBig.png`],
  },
  authors: { name: author },
  creator: author,
  publisher: author,
  manifest: `${MAIN_URL}/manifest.json`,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", allianceNo2.className)}
    >
      <body className="flex flex-col items-center min-h-svh">
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <main className="max-w-4xl w-full">
              {children}
            </main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
