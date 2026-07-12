import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Brand fonts: Outfit for display, IBM Plex Mono for scoreboard readouts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omer Izhaki | Developer, Game Maker, Team Leader",
  description:
    "CS and cybersecurity student who ships real products: Road to Global Cup on the iOS App Store, " +
    "AI apps, and a quant trading bot. Open to full-time roles and business opportunities.",
  authors: [{ name: "Omer Izhaki" }],
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Omer Izhaki | Developer, Game Maker, Team Leader",
    description:
      "A portfolio played as an arcade football season. Game on the App Store, AI apps, quant trading.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0e1433",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${plexMono.variable} font-display antialiased`}>
        {children}
      </body>
    </html>
  );
}
