import Link from "next/link";
import { getAllArtists } from "@/lib/lyrics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performers & Authors // Classified Ledger — Lyrics Translation",
  description: "Archival ledger of composers, vocalists, and producers.",
};

export default function ArtistsPage() {
  const artists = getAllArtists();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Broadsheet Masthead */}
      <div className="relative mb-10 border border-[#C5A059]/30 bg-[#1C1A17] p-6 sm:p-8">
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        <div className="border border-[#C5A059]/15 p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
                INDEX LEDGER // SECTION III
              </div>
              <h1 className="mt-2 font-serif text-3xl font-bold tracking-wide text-[#E6DEC8] sm:text-4xl">
                The <span className="italic text-[#C5A059]">Performers</span> &amp; Authors
              </h1>
              <p className="mt-2 font-serif text-base italic text-[#8C8273]">
                Registry of composers, vocaloids, synthesizers, and visual creators catalogued in the archives.
              </p>
            </div>

            <div className="self-start sm:self-center">
              <div className="archive-stamp">
                REGISTERED // {artists.length} VOICES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artists Ledger Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist, idx) => (
          <Link
            key={artist.slug}
            href={`/${artist.slug}`}
            className="group relative flex flex-col justify-between border border-[#C5A059]/40 bg-[#1C1A17] p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#C5A059] hover:bg-[#25221E]"
          >
            {/* 4 Corner Rotating Diamonds */}
            <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />
            <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />
            <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />
            <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />

            {/* Inset Hairline Rule */}
            <div className="pointer-events-none absolute inset-1.5 border border-[#C5A059]/15 transition-colors duration-500 group-hover:border-[#C5A059]/35" />

            {/* Header Docket */}
            <div className="mb-4 flex items-center justify-between font-mono text-[9px] tracking-widest text-[#8C8273]">
              <span>DOSSIER REF: #{String(idx + 1).padStart(3, "0")}</span>
              <span className="text-[#C5A059]">❖</span>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-xl font-bold tracking-wide text-[#E6DEC8] transition-colors group-hover:text-[#C5A059]">
                {artist.name}
              </h2>
            </div>

            {/* Footer Reel Count */}
            <div className="mt-4 flex items-center justify-between border-t border-[#C5A059]/20 pt-3 font-mono text-xs text-[#8C8273]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#C5A059]">◆</span>
                <span>
                  {artist.songCount} {artist.songCount === 1 ? "REEL" : "REELS"}
                </span>
              </span>
              <span className="font-serif text-xs text-[#C5A059] transition-transform duration-500 group-hover:translate-x-1">
                INSPECT ➔
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
