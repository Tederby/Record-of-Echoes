import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Space_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyrics Translation // Classified Dossier",
  description:
    "Occult archival translation index of Vocaloid and Japanese lyrical compositions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${spaceMono.variable} min-h-screen antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#141311] text-[#E6DEC8] selection:bg-[#C5A059]/30 selection:text-[#E6DEC8]">
        {/* Fixed Ambient Background - seamless across any scroll length */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-[#141311]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 50% 0%, rgba(197, 160, 89, 0.08) 0%, transparent 70%),
                radial-gradient(circle at 100% 100%, rgba(168, 66, 43, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(74, 93, 78, 0.04) 0%, transparent 50%)
              `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>

        {/* Mandatory Film/Paper Grain Overlay */}
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-screen w-screen opacity-[0.035] mix-blend-overlay"
          aria-hidden="true"
        >
          <filter id="archive-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={3}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#archive-grain)" />
        </svg>

        {/* Top classified banner line */}
        <div className="relative border-b border-[#C5A059]/20 bg-[#1C1A17] py-1 text-center font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
          <span className="text-[#C5A059]">✦</span> ARCHIVE REF: 1966.REV-99 // RESTRICTED DOSSIER // VOCALOID PHONOGRAPH TRANSLATIONS <span className="text-[#C5A059]">✦</span>
        </div>

        <Navbar />

        <main className="relative flex-1">{children}</main>

        {/* Vintage Dossier Archival Footer */}
        <footer className="relative mt-16 border-t border-[#C5A059]/30 bg-[#1C1A17]/80 py-8 text-center backdrop-blur-sm">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4">
            <div className="flex items-center gap-3 text-[#C5A059]">
              <span className="h-[1px] w-12 bg-[#C5A059]/40"></span>
              <span className="rotate-45 text-xs">◆</span>
              <span className="font-serif text-xs uppercase tracking-[0.3em] text-[#C5A059]">
                The Archive of Echoes
              </span>
              <span className="rotate-45 text-xs">◆</span>
              <span className="h-[1px] w-12 bg-[#C5A059]/40"></span>
            </div>
            <p className="font-mono text-xs text-[#8C8273]">
              CLASSIFICATION: PUBLIC ACCESS // ALL ORIGINAL LYRICAL PATENTS REMAIN WITH RESPECTIVE ARTISTS
            </p>
            <p className="text-xs italic text-[#8C8273]/80">
              Preserved &amp; annotated in 1960s archival broadsheet format.
            </p>
          </div>
        </footer>

        <BackToTop />
      </body>
    </html>
  );
}
