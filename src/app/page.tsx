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
    <div className="mx-auto max-w-5xl px-3.5 py-6 sm:px-6 sm:py-12">
      {/* Broadsheet Masthead / Hero */}
      <div className="relative mb-8 sm:mb-10 border border-[#C5A059]/30 bg-[#1C1A17] p-3.5 sm:p-8">
        {/* Four corner diamonds */}
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        {/* Inner bookplate inset border */}
        <div className="border border-[#C5A059]/15 p-3.5 sm:p-6">
          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#8C8273]">
                <span className="text-[#C5A059]">✦</span>
                <span>VOL. LXVI — CASE NO. 1999</span>
                <span className="text-[#C5A059]">✦</span>
              </div>
              <h1 className="mt-2 font-serif text-2xl xs:text-3xl font-bold tracking-wide text-[#E6DEC8] sm:text-4xl md:text-5xl">
                The <span className="italic text-[#C5A059]">Archive</span> of Echoes
              </h1>
              <p className="mt-1.5 max-w-2xl font-serif text-sm italic text-[#8C8273] sm:text-lg">
                Decoded lyrics &amp; phonographic dossiers from the depths of Japanese synthesized soundscapes.
              </p>
            </div>

            {/* Classified Stamp */}
            <div className="self-start sm:self-center">
              <div className="archive-stamp text-[10px] sm:text-[0.65rem]">
                DECLASSIFIED // 1999
              </div>
            </div>
          </div>

          {/* Archival Ledger Stats Bar */}
          <div className="mt-5 sm:mt-6 border-t border-[#C5A059]/20 pt-3.5 sm:pt-4 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="w-full text-[10px] tracking-wider text-[#8C8273] sm:w-auto">
                DOSSIER SUMMARY:
              </span>
              
              <div className="flex flex-1 items-center justify-center gap-2 border border-[#C5A059]/40 bg-[#141311] px-2.5 py-1 text-[#E6DEC8] sm:flex-initial sm:px-3">
                <span className="text-[9px] text-[#C5A059]">◆</span>
                <span className="font-bold text-[#C5A059]">{songs.length}</span>
                <span className="text-[10px] text-[#8C8273] sm:text-[11px]">COMPOSITIONS</span>
              </div>

              <div className="flex flex-1 items-center justify-center gap-2 border border-[#C5A059]/40 bg-[#141311] px-2.5 py-1 text-[#E6DEC8] sm:flex-initial sm:px-3">
                <span className="text-[9px] text-[#C5A059]">◆</span>
                <span className="font-bold text-[#C5A059]">{artists.length}</span>
                <span className="text-[10px] text-[#8C8273] sm:text-[11px]">AUTHORS</span>
              </div>

              <div className="flex w-full items-center justify-center gap-2 border border-[#C5A059]/40 bg-[#141311] px-2.5 py-1 text-[#E6DEC8] sm:w-auto sm:px-3">
                <span className="text-[9px] text-[#C5A059]">◆</span>
                <span className="font-bold text-[#C5A059]">{tags.length}</span>
                <span className="text-[10px] text-[#8C8273] sm:text-[11px]">CLASSIFICATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Song Listing */}
      <SongList songs={songs} />
    </div>
  );
}
