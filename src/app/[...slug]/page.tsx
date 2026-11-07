import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllSongs,
  getAllArtists,
  getSongBySlug,
  getSongsByArtist,
  isArtistSlug,
} from "@/lib/lyrics";
import SongDetail from "./SongDetail";
import SongList from "@/app/components/SongList";
import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  const songs = getAllSongs();
  const artists = getAllArtists();

  const params: { slug: string[] }[] = [];

  for (const artist of artists) {
    params.push({ slug: [artist.slug] });
  }

  for (const song of songs) {
    params.push({ slug: song.slug });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) {
    const artistName = slug[0].replace(/_/g, " ");
    return {
      title: `${artistName} // Performer Dossier — Lyrics Translation`,
      description: `Classified lyrical archive for ${artistName}`,
    };
  }

  const song = getSongBySlug(slug);
  if (!song) {
    return { title: "Dossier Not Found — Lyrics Translation" };
  }

  return {
    title: `${song.metadata.title} — ${song.metadata.artist} // Archival Dossier`,
    description: `Decoded lyrics and translation of ${song.metadata.title} (${song.metadata.title_original ?? ""}) by ${song.metadata.artist}`,
  };
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  // 1 segment → Artist page
  if (slug.length === 1) {
    const artistSlug = slug[0];
    if (!isArtistSlug(artistSlug)) {
      notFound();
    }

    const songs = getSongsByArtist(artistSlug);
    const artistName =
      songs[0]?.metadata.artist ?? artistSlug.replace(/_/g, " ");

    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 font-mono text-xs tracking-wider text-[#8C8273]">
          <Link href="/" className="transition-colors hover:text-[#C5A059]">
            CATALOG
          </Link>
          <span className="text-[#C5A059]">◆</span>
          <span className="text-[#E6DEC8]">{artistName}</span>
        </nav>

        {/* Artist Header Dossier */}
        <div className="relative mb-8 border border-[#C5A059]/40 bg-[#1C1A17] p-6">
          <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border border-[#C5A059]/15 p-4 sm:p-5">
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
                DOSSIER REF: PERF-{artistSlug.toUpperCase()}
              </div>
              <h1 className="mt-1 font-serif text-3xl font-bold tracking-wide text-[#E6DEC8]">
                {artistName}
              </h1>
              <p className="mt-1 font-mono text-xs text-[#C5A059]">
                {songs.length} ARCHIVED REEL{songs.length !== 1 ? "S" : ""} DECODED
              </p>
            </div>
            <div className="archive-stamp">
              INDEXED // CONFIRMED
            </div>
          </div>
        </div>

        <SongList songs={songs} showSearch={false} />
      </div>
    );
  }

  // 2 or 3 segments → Song page
  const song = getSongBySlug(slug);
  if (!song) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider text-[#8C8273]">
        <Link href="/" className="transition-colors hover:text-[#C5A059]">
          CATALOG
        </Link>
        <span className="text-[#C5A059]">◆</span>
        <Link
          href={`/${song.artistSlug}`}
          className="transition-colors hover:text-[#C5A059]"
        >
          {song.metadata.artist}
        </Link>
        <span className="text-[#C5A059]">◆</span>
        <span className="truncate text-[#E6DEC8]">{song.metadata.title}</span>
      </nav>

      <SongDetail song={song} />
    </div>
  );
}
