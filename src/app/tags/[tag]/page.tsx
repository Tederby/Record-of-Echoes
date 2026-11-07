import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllTagsWithSlugs, getSongsByTagSlug } from "@/lib/lyrics";
import SongList from "@/app/components/SongList";
import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = getAllTagsWithSlugs();
  return tags.map(({ slug }) => ({ tag: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: slug } = await params;
  const result = getSongsByTagSlug(decodeURIComponent(slug));
  const displayTag = result?.tag ?? slug;
  return {
    title: `[${displayTag}] // Taxonomy Dossier — Lyrics Translation`,
    description: `Archival compositions categorized under "${displayTag}"`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: slug } = await params;
  const result = getSongsByTagSlug(decodeURIComponent(slug));

  if (!result || result.songs.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 font-mono text-xs tracking-wider text-[#8C8273]">
        <Link href="/" className="transition-colors hover:text-[#C5A059]">
          CATALOG
        </Link>
        <span className="text-[#C5A059]">◆</span>
        <Link href="/tags" className="transition-colors hover:text-[#C5A059]">
          CLASSIFICATIONS
        </Link>
        <span className="text-[#C5A059]">◆</span>
        <span className="text-[#E6DEC8]">{result.tag}</span>
      </nav>

      {/* Header Dossier */}
      <div className="relative mb-8 border border-[#C5A059]/40 bg-[#1C1A17] p-6">
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border border-[#C5A059]/15 p-4 sm:p-5">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
              TAXONOMY MARK // #{result.tag.toUpperCase()}
            </div>
            <h1 className="mt-1 font-serif text-3xl font-bold tracking-wide text-[#E6DEC8]">
              {result.tag}
            </h1>
            <p className="mt-1 font-mono text-xs text-[#C5A059]">
              {result.songs.length} ARCHIVED REEL{result.songs.length !== 1 ? "S" : ""} FOUND
            </p>
          </div>
          <div className="archive-stamp">
            INDEXED // VERIFIED
          </div>
        </div>
      </div>

      <SongList songs={result.songs} showSearch={false} />
    </div>
  );
}
