import { getAllSongs, getAllArtists, getAllTags } from "@/lib/lyrics";
import SongList from "./components/SongList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classified Dossier — Lyrics Translation",
  description:
    "Occult archival translation index of Vocaloid and Japanese lyrical compositions.",
};

export default function HomePage() {
  const songs = getAllSongs();
  const artists = getAllArtists();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Broadsheet Masthead / Hero */}
      <div className="relative mb-10 border border-[#C5A059]/30 bg-[#1C1A17] p-6 sm:p-8">
        {/* Four corner diamonds */}
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        {/* Inner bookplate inset border */}
        <div className="border border-[#C5A059]/15 p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
                <span className="text-[#C5A059]">✦</span>
                <span>VOL. LXVI — CASE NO. 1999</span>
                <span className="text-[#C5A059]">✦</span>
              </div>
              <h1 className="mt-2 font-serif text-3xl font-bold tracking-wide text-[#E6DEC8] sm:text-4xl md:text-5xl">
                The <span className="italic text-[#C5A059]">Archive</span> of Echoes
              </h1>
              <p className="mt-2 max-w-2xl font-serif text-base italic text-[#8C8273] sm:text-lg">
                Decoded lyrics &amp; phonographic dossiers from the depths of Japanese synthesized soundscapes.
              </p>
            </div>

            {/* Classified Stamp */}
            <div className="self-start sm:self-center">
              <div className="archive-stamp">
                DECLASSIFIED // 1999
              </div>
            </div>
          </div>

          {/* Archival Ledger Stats Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#C5A059]/20 pt-4 font-mono text-xs">
            <span className="text-[#8C8273]">DOSSIER SUMMARY:</span>
            
            <div className="flex items-center gap-2 border border-[#C5A059]/40 bg-[#141311] px-3 py-1 text-[#E6DEC8]">
              <span className="text-[10px] text-[#C5A059]">◆</span>
              <span className="font-bold text-[#C5A059]">{songs.length}</span>
              <span className="text-[11px] text-[#8C8273]">COMPOSITIONS</span>
            </div>

            <div className="flex items-center gap-2 border border-[#C5A059]/40 bg-[#141311] px-3 py-1 text-[#E6DEC8]">
              <span className="text-[10px] text-[#C5A059]">◆</span>
              <span className="font-bold text-[#C5A059]">{artists.length}</span>
              <span className="text-[11px] text-[#8C8273]">AUTHORS</span>
            </div>

            <div className="flex items-center gap-2 border border-[#C5A059]/40 bg-[#141311] px-3 py-1 text-[#E6DEC8]">
              <span className="text-[10px] text-[#C5A059]">◆</span>
              <span className="font-bold text-[#C5A059]">{tags.length}</span>
              <span className="text-[11px] text-[#8C8273]">CLASSIFICATIONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Song Listing */}
      <SongList songs={songs} />
    </div>
  );
}
