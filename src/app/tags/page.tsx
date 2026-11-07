import Link from "next/link";
import { getAllTagsWithSlugs, getSongsByTag } from "@/lib/lyrics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classifications & Taxonomy // Archival Index — Lyrics Translation",
  description: "Browse translations by genre, theme, synthesizer, or series.",
};

export default function TagsIndexPage() {
  const tags = getAllTagsWithSlugs();

  return (
    <div className="mx-auto max-w-5xl px-3.5 py-6 sm:px-6 sm:py-12">
      {/* Masthead */}
      <div className="relative mb-8 sm:mb-10 border border-[#C5A059]/30 bg-[#1C1A17] p-3.5 sm:p-8">
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        <div className="border border-[#C5A059]/15 p-3.5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-[#8C8273]">
                TAXONOMY DIVISION // SECTION II
              </div>
              <h1 className="mt-2 font-serif text-2xl xs:text-3xl font-bold tracking-wide text-[#E6DEC8] sm:text-4xl">
                The <span className="italic text-[#C5A059]">Thematic</span> Classifications
              </h1>
              <p className="mt-1.5 font-serif text-sm sm:text-base italic text-[#8C8273]">
                Occult taxonomies, synthesizer models, aesthetic motifs, and thematic indices.
              </p>
            </div>

            <div className="self-start sm:self-center">
              <div className="archive-stamp text-[10px] sm:text-[0.65rem]">
                CLASSIFIED // {tags.length} MARKS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Index Tabs Grid */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tags.map(({ tag, slug }) => {
          const count = getSongsByTag(tag).length;
          return (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(slug)}`}
              className="group relative flex items-center gap-2 border border-[#C5A059]/40 bg-[#1C1A17] px-3 py-1.5 sm:px-3.5 sm:py-2 font-mono text-[11px] sm:text-xs text-[#E6DEC8] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#25221E] hover:text-[#C5A059]"
            >
              <div className="absolute -top-0.5 -left-0.5 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311] group-hover:bg-[#C5A059]" />
              <div className="absolute -bottom-0.5 -right-0.5 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311] group-hover:bg-[#C5A059]" />

              <span className="text-[10px] text-[#4A5D4E] transition-colors group-hover:text-[#C5A059]">
                ◆
              </span>
              <span className="tracking-wider uppercase">{tag}</span>
              <span className="border border-[#C5A059]/30 bg-[#141311] px-1.5 py-0.5 text-[10px] text-[#8C8273] transition-colors group-hover:border-[#C5A059] group-hover:text-[#E6DEC8]">
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
