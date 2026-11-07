"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import type { Song } from "@/lib/types";
import { getLanguageLabel } from "@/lib/types";
import { getYouTubeThumbnail } from "@/lib/youtube";

/** Short badges for common languages */
const LANGUAGE_BADGE: Record<string, string> = {
  indonesia: "ID",
  english: "EN",
  romaji: "RJ",
  original: "原",
};

function getLanguageBadge(key: string): string {
  return LANGUAGE_BADGE[key] ?? key.slice(0, 2).toUpperCase();
}

function getLanguageBadgeClass(key: string): string {
  switch (key) {
    case "indonesia":
      return "border-[#A8422B] text-[#C85A32] bg-[#A8422B]/10";
    case "english":
      return "border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10";
    case "romaji":
      return "border-[#4A5D4E] text-[#7A9A80] bg-[#4A5D4E]/10";
    default:
      return "border-[#8C8273] text-[#E6DEC8] bg-[#25221E]";
  }
}

/**
 * Normalize a string for fuzzy matching:
 * lowercase, remove diacritics, collapse whitespace.
 */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

interface SongListProps {
  songs: Song[];
  showSearch?: boolean;
}

export default function SongList({ songs, showSearch = true }: SongListProps) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 20;

  const filtered = useMemo(() => {
    const raw = query.trim();
    if (!raw) return songs;

    const tokens = normalize(raw)
      .split(/\s+/)
      .filter(Boolean);

    return songs.filter((song) => {
      const haystack = normalize(song.searchableText);
      return tokens.every((token) => haystack.includes(token));
    });
  }, [songs, query]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setQuery("");
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      {showSearch && (
        <div className="mb-8">
          <div className="relative border border-[#C5A059]/40 bg-[#1C1A17] p-1">
            {/* Corner anchors */}
            <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
            <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
            <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
            <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />

            <div className="relative flex items-center border border-[#C5A059]/20 bg-[#141311]">
              <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-[#C5A059]" />
              <input
                type="text"
                placeholder="Search archive by title, composer, vocalist, lyrics..."
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                className="w-full bg-transparent py-3 pl-10 pr-10 font-serif text-sm text-[#E6DEC8] placeholder-[#8C8273] focus:outline-none"
              />
              {query && (
                <button
                  onClick={handleClear}
                  className="absolute right-3 border border-[#C5A059]/40 p-1 text-[#8C8273] transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
                  aria-label="Clear search docket"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-[#C5A059]/30 bg-[#1C1A17] p-12 text-center">
          <div className="mb-2 font-serif text-2xl text-[#C5A059]">❖</div>
          <p className="font-serif text-lg text-[#E6DEC8]">
            No matching archival dossiers recorded.
          </p>
          <p className="mt-1 font-mono text-xs text-[#8C8273]">
            Verify keyword parameters or inspect the classified tags index.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {paginated.map((song) => (
              <SongCard key={song.slug.join("/")} song={song} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex h-9 w-9 items-center justify-center border border-[#C5A059]/40 bg-[#1C1A17] font-mono text-xs text-[#C5A059] transition-all hover:border-[#C5A059] hover:bg-[#25221E] disabled:pointer-events-none disabled:opacity-30"
                aria-label="Previous ledger page"
              >
                ◀
              </button>

              <div className="flex items-center gap-1.5 font-mono text-xs">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`inline-flex h-9 min-w-[2.25rem] items-center justify-center border px-2 font-mono transition-colors ${
                          currentPage === pageNum
                            ? "border-[#C5A059] bg-[#C5A059] font-bold text-[#141311]"
                            : "border-[#C5A059]/30 bg-[#1C1A17] text-[#8C8273] hover:border-[#C5A059] hover:text-[#E6DEC8]"
                        }`}
                      >
                        {String(pageNum).padStart(2, "0")}
                      </button>
                    );
                  }

                  if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                    return (
                      <span key={pageNum} className="px-1 text-[#8C8273]">
                        ···
                      </span>
                    );
                  }

                  return null;
                })}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex h-9 w-9 items-center justify-center border border-[#C5A059]/40 bg-[#1C1A17] font-mono text-xs text-[#C5A059] transition-all hover:border-[#C5A059] hover:bg-[#25221E] disabled:pointer-events-none disabled:opacity-30"
                aria-label="Next ledger page"
              >
                ▶
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SongCard({ song }: { song: Song }) {
  const thumbnail = song.metadata.source_url
    ? getYouTubeThumbnail(song.metadata.source_url, "mqdefault")
    : null;

  return (
    <Link
      href={`/${song.slug.join("/")}`}
      className="group relative flex h-52 flex-col justify-end overflow-hidden border border-[#C5A059]/40 bg-[#1C1A17] p-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#C5A059] hover:bg-[#25221E] sm:h-56 sm:p-5"
    >
      {/* 4 Corner Rotating Diamonds */}
      <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />
      <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />
      <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />
      <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311] transition-transform duration-500 group-hover:rotate-[135deg] group-hover:bg-[#C5A059]" />

      {/* Bookplate Inset Rule */}
      <div className="pointer-events-none absolute inset-1.5 border border-[#C5A059]/15 transition-colors duration-500 group-hover:border-[#C5A059]/35" />

      {/* Background Graphic / Phonograph Reel */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-35">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={song.metadata.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#141311]">
            <span className="font-serif text-5xl text-[#C5A059]/20">❖</span>
          </div>
        )}
      </div>

      {/* Dark Umber Gradient Wash */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#141311] via-[#1C1A17]/85 to-[#1C1A17]/40" />

      {/* Top Ledger Metadata */}
      <div className="absolute top-3.5 right-3.5 left-3.5 z-20 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-[#8C8273]">
        <span className="flex items-center gap-1 text-[#C5A059]">
          <span>✦</span> DOSSIER REF
        </span>
        {song.metadata.translated_date && (
          <span className="border border-[#C5A059]/30 bg-[#141311]/90 px-1.5 py-0.5 text-[#E6DEC8]">
            {song.metadata.translated_date}
          </span>
        )}
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-end pt-6">
        <div>
          <h2
            className="line-clamp-2 font-serif text-lg font-bold tracking-wide text-[#E6DEC8] transition-colors group-hover:text-[#C5A059]"
            title={song.metadata.title}
          >
            {song.metadata.title}
          </h2>
          {song.metadata.title_original && (
            <p
              className="mt-0.5 truncate font-serif text-xs italic text-[#8C8273]"
              title={song.metadata.title_original}
            >
              {song.metadata.title_original}
            </p>
          )}

          <p className="mt-1.5 truncate font-mono text-xs text-[#8C8273]">
            <span className="text-[#C5A059]">BY:</span> {song.metadata.artist}
            {song.metadata.vocalist &&
              song.metadata.vocalist !== song.metadata.artist && (
                <span> {"//"} VOCAL: {song.metadata.vocalist}</span>
              )}
          </p>
        </div>

        {/* Bottom classification & language seals */}
        <div className="mt-3 flex items-end justify-between gap-2 border-t border-[#C5A059]/20 pt-2.5">
          <div className="flex flex-wrap gap-1">
            {song.metadata.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border border-[#4A5D4E]/40 bg-[#141311] px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-[#8C8273]"
              >
                #{tag}
              </span>
            ))}
            {song.metadata.tags.length > 3 && (
              <span className="border border-[#8C8273]/30 bg-[#141311] px-1.5 py-0.5 font-mono text-[9px] text-[#8C8273]">
                +{song.metadata.tags.length - 3}
              </span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {song.availableLanguages.map((lang) => (
              <span
                key={lang}
                title={getLanguageLabel(lang)}
                className={`inline-flex h-4 min-w-[1.25rem] items-center justify-center border px-1 font-mono text-[9px] font-bold tracking-tighter ${getLanguageBadgeClass(
                  lang
                )}`}
              >
                {getLanguageBadge(lang)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
