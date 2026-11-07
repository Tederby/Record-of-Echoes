"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import TagChip from "@/app/components/TagChip";
import VideoEmbed from "@/app/components/VideoEmbed";
import type { Song } from "@/lib/types";
import { getLanguageLabel } from "@/lib/types";

interface SongDetailProps {
  song: Song;
}

export default function SongDetail({ song }: SongDetailProps) {
  const { metadata, availableLanguages } = song;

  const [activeLanguage, setActiveLanguage] = useState<string>(
    availableLanguages.includes("indonesia")
      ? "indonesia"
      : availableLanguages[0]
  );
  const [sideBySide, setSideBySide] = useState(false);
  const [secondLanguage, setSecondLanguage] = useState<string>(() => {
    const others = availableLanguages.filter((l) => l !== activeLanguage);
    if (others.includes("original")) return "original";
    return others[0] ?? activeLanguage;
  });

  const handleLanguageChange = useCallback(
    (newLang: string) => {
      setActiveLanguage(newLang);
      if (secondLanguage === newLang) {
        const others = availableLanguages.filter((l) => l !== newLang);
        if (others.length > 0) {
          setSecondLanguage(others.includes("original") ? "original" : others[0]);
        }
      }
    },
    [secondLanguage, availableLanguages]
  );

  // Keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Number keys 1-9 to switch language
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= availableLanguages.length) {
        e.preventDefault();
        handleLanguageChange(availableLanguages[num - 1]);
        return;
      }

      // S to toggle side-by-side
      if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        setSideBySide((prev) => !prev);
      }
    },
    [availableLanguages, handleLanguageChange]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const metadataItems: { label: string; value: string | undefined }[] = [
    { label: "Composer / Artist", value: metadata.artist },
    { label: "Vocalist", value: metadata.vocalist },
    { label: "Producer", value: metadata.producer },
    { label: "Lyricist", value: metadata.lyricist },
    { label: "Arranger", value: metadata.arranger },
    { label: "Illustrator", value: metadata.illustrator },
    { label: "Anthology / Album", value: metadata.album },
    { label: "Original Broadcast", value: metadata.release_date },
  ];

  return (
    <article className="space-y-8">
      {/* Classified Header Dossier */}
      <header className="relative border border-[#C5A059]/40 bg-[#1C1A17] p-6 sm:p-8">
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        <div className="border border-[#C5A059]/15 p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#C5A059]/20 pb-3">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
              RESTRICTED DOSSIER // SHEET NO. 09
            </span>
            <span className="archive-stamp">
              VERIFIED // 1999
            </span>
          </div>

          <div className="mt-4">
            <h1 className="font-serif text-3xl font-bold tracking-wide text-[#E6DEC8] sm:text-4xl">
              {metadata.title}
            </h1>
            {metadata.title_original && (
              <p className="mt-1 font-serif text-xl italic text-[#C5A059]">
                {metadata.title_original}
              </p>
            )}
            {metadata.title_romaji && (
              <p className="mt-0.5 font-mono text-xs tracking-wider text-[#8C8273]">
                [{metadata.title_romaji}]
              </p>
            )}
          </div>

          {/* Dossier Metadata Grid */}
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#C5A059]/20 pt-4 font-mono text-xs sm:grid-cols-4">
            {metadataItems
              .filter((item) => item.value)
              .map((item) => (
                <div key={item.label} className="border-l border-[#C5A059]/20 pl-2.5">
                  <dt className="text-[10px] uppercase tracking-wider text-[#8C8273]">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-[#E6DEC8]">
                    {item.value}
                  </dd>
                </div>
              ))}
          </dl>

          {/* Classification Tags */}
          {metadata.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#C5A059]/20 pt-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C8273]">
                INDEX MARKS:
              </span>
              {metadata.tags.map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
          )}

          {/* Translator note */}
          {song.languages[activeLanguage]?.frontmatter?.translator_note && (
            <div className="mt-5 border-l-2 border-[#C5A059] bg-[#141311] p-3 text-xs italic text-[#E6DEC8]/90">
              <span className="font-mono font-bold not-italic text-[#C5A059]">
                TRANSLATOR&apos;S MARGINALIA:{" "}
              </span>
              {song.languages[activeLanguage].frontmatter.translator_note}
            </div>
          )}
        </div>
      </header>

      {/* Video playback */}
      {metadata.source_url && (
        <section aria-label="Audio Visual Broadcast">
          <VideoEmbed url={metadata.source_url} />
        </section>
      )}

      {/* Language Controls Bar */}
      <div className="sticky top-[3.75rem] z-30 border border-[#C5A059]/40 bg-[#141311]/95 p-3 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label
                htmlFor="lang-select"
                className="font-mono text-xs uppercase tracking-wider text-[#C5A059]"
              >
                DIALECT:
              </label>
              <select
                id="lang-select"
                value={activeLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="border border-[#C5A059]/40 bg-[#1C1A17] px-2.5 py-1 font-mono text-xs text-[#E6DEC8] focus:border-[#C5A059] focus:outline-none"
              >
                {availableLanguages.map((lang, i) => (
                  <option key={lang} value={lang}>
                    {getLanguageLabel(lang)}
                    {i < 9 ? ` [${i + 1}]` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Side-by-side toggle */}
            {availableLanguages.length >= 2 && (
              <label className="flex cursor-pointer items-center gap-2 border border-[#C5A059]/30 bg-[#1C1A17] px-2.5 py-1 font-mono text-xs text-[#E6DEC8] transition-colors hover:border-[#C5A059]">
                <input
                  type="checkbox"
                  checked={sideBySide}
                  onChange={(e) => setSideBySide(e.target.checked)}
                  className="accent-[#C5A059]"
                />
                <span>COMPARATIVE VIEW [S]</span>
              </label>
            )}

            {/* Second language selector */}
            {sideBySide && (
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#8C8273]">VS.</span>
                <select
                  value={secondLanguage}
                  onChange={(e) => setSecondLanguage(e.target.value)}
                  className="border border-[#C5A059]/40 bg-[#1C1A17] px-2.5 py-1 font-mono text-xs text-[#E6DEC8] focus:border-[#C5A059] focus:outline-none"
                >
                  {availableLanguages
                    .filter((l) => l !== activeLanguage)
                    .map((lang) => (
                      <option key={lang} value={lang}>
                        {getLanguageLabel(lang)}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>

          <div className="hidden sm:block font-mono text-[10px] tracking-widest text-[#8C8273]">
            DIALECTS AVAILABLE: {availableLanguages.length}
          </div>
        </div>
      </div>

      {/* Lyrics Transcripts */}
      <AnimatePresence mode="wait">
        <motion.div
          key={
            sideBySide
              ? `dual-${activeLanguage}-${secondLanguage}`
              : `single-${activeLanguage}`
          }
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {sideBySide ? (
            <div className="grid gap-6 md:grid-cols-2">
              <LyricsPane
                label={getLanguageLabel(activeLanguage)}
                content={song.languages[activeLanguage]?.content ?? ""}
                expanded
              />
              <LyricsPane
                label={getLanguageLabel(secondLanguage)}
                content={song.languages[secondLanguage]?.content ?? ""}
                expanded
              />
            </div>
          ) : (
            <LyricsPane
              label={getLanguageLabel(activeLanguage)}
              content={song.languages[activeLanguage]?.content ?? ""}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Keyboard shortcuts footnote */}
      <div className="border-t border-[#C5A059]/20 pt-4 font-mono text-[11px] text-[#8C8273]">
        <span className="text-[#C5A059]">❖ CONTROL KEYS:</span> Numbers 1–
        {availableLanguages.length} switch dialect transcript // Press [S] to
        toggle comparative side-by-side view.
      </div>
    </article>
  );
}

function preprocessFurigana(content: string): string {
  return content.replace(
    /\{([^|{}]+)\|([^|{}]+)\}/g,
    (_match, base: string, reading: string) =>
      `<ruby>${base}<rp>(</rp><rt>${reading}</rt><rp>)</rp></ruby>`
  );
}

function LyricsPane({
  label,
  content,
  expanded,
}: {
  label: string;
  content: string;
  expanded?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className={`relative border border-[#C5A059]/40 bg-[#1C1A17] p-6 transition-colors duration-500 hover:border-[#C5A059] ${
        expanded ? "min-h-[60vh]" : ""
      }`}
    >
      {/* 4 Corner Diamonds */}
      <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
      <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
      <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
      <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />

      {/* Inset Hairline Rule */}
      <div className="pointer-events-none absolute inset-1.5 border border-[#C5A059]/15" />

      {/* Docket Header */}
      <div className="mb-6 flex items-center justify-between border-b border-[#C5A059]/20 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#C5A059]">❖</span>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#E6DEC8]">
            {label} TRANSCRIPT
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 border border-[#C5A059]/40 bg-[#141311] px-2.5 py-1 font-mono text-[10px] tracking-wider text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#25221E]"
          title="Duplicate transcript to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-[#7A9A80]" />
              <span>RECORD DUPLICATED</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>COPY TRANSCRIPT</span>
            </>
          )}
        </button>
      </div>

      {/* Transcript Text */}
      <div className="prose prose-invert max-w-none font-serif text-[#E6DEC8] leading-loose">
        <ReactMarkdown
          remarkPlugins={[remarkBreaks, remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {preprocessFurigana(content)}
        </ReactMarkdown>
      </div>
    </div>
  );
}
