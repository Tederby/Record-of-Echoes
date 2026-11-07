"use client";

import { extractYouTubeId } from "@/lib/youtube";

interface VideoEmbedProps {
  url: string;
}

export default function VideoEmbed({ url }: VideoEmbedProps) {
  const youtubeId = extractYouTubeId(url);

  if (youtubeId) {
    return (
      <div className="relative border border-[#C5A059]/40 bg-[#1C1A17] p-1.5 sm:p-2">
        {/* Corner diamonds */}
        <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />

        {/* Dossier classification header bar */}
        <div className="mb-1.5 flex items-center justify-between border-b border-[#C5A059]/20 pb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8C8273]">
          <span className="flex items-center gap-1.5 text-[#C5A059]">
            <span>❖</span> PHONOGRAPH BROADCAST FEED
          </span>
          <span>REEL-TO-REEL // NO. 04</span>
        </div>

        {/* 16:9 Player container */}
        <div
          className="relative w-full overflow-hidden border border-[#C5A059]/20 bg-[#141311]"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title="Archival Audio-Visual Record"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // Non-YouTube URL — render as vintage archival plaque
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-2 border border-[#C5A059]/50 bg-[#1C1A17] px-4 py-2 font-mono text-xs tracking-wider text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#25221E]"
    >
      <div className="absolute -top-0.5 -left-0.5 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311]" />
      <div className="absolute -bottom-0.5 -right-0.5 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311]" />
      <span>▶</span>
      <span>INSPECT EXTERNAL MASTER RECORD</span>
      <span className="font-serif text-sm">↗</span>
    </a>
  );
}
