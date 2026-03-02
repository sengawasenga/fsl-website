import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ashigea = localFont({
  src: "../public/fonts/ashigea/Ashigea-Regular.otf",
  variable: "--font-ashigea",
});

export const metadata: Metadata = {
  title: "Fondation Sylvain Lumbala",
  description:
    "Pour la Fondation Sylvain Lumbala (FSL), nous agissons sur le terrain, de Kinshasa aux provinces, pour un développement durable et participatif. Nous œuvrons dans des secteurs vitaux : Santé, Éducation, Environnement, Agriculture et Micro finance, en travaillant avec les communautés pour réhabiliter les infrastructures et créer des opportunités de revenus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${geistSans.className} bg-background text-foreground font-light overflow-x-hidden antialiased ${ashigea.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
