import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archival Notes & Methodology // Classified Dossier",
  description:
    "Curator's foreword, translation philosophy, and legal disclaimer.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Broadsheet Masthead */}
      <div className="relative mb-10 border border-[#C5A059]/30 bg-[#1C1A17] p-6 sm:p-8">
        <div className="absolute -top-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -top-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 border border-[#C5A059] bg-[#141311]" />

        <div className="border border-[#C5A059]/15 p-4 sm:p-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#8C8273]">
            <span className="text-[#C5A059]">✦</span>
            <span>DEPT. OF OCCULT LINGUISTICS // ARCHIVE PROTOCOL</span>
            <span className="text-[#C5A059]">✦</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-wide text-[#E6DEC8] sm:text-5xl">
            Archival <span className="italic text-[#C5A059]">Notes</span> &amp; Methodology
          </h1>
          <p className="mt-2 font-serif text-base italic text-[#8C8273] sm:text-lg">
            A declassified manifesto on semantic transference, emotional resonance, and phonographic records.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="archive-stamp">
              CURATOR&apos;S DOSSIER // DECLASSIFIED
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Section 1: Translation Methodology */}
        <section className="relative border border-[#C5A059]/40 bg-[#1C1A17] p-6 sm:p-8">
          <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />

          <div className="border border-[#C5A059]/15 p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#C5A059]/20 pb-3 font-mono text-xs tracking-wider text-[#C5A059]">
              <span className="flex items-center gap-2">
                <span>❖</span> SECTION 01 // INTERPRETIVE PHILOSOPHY
              </span>
              <span className="text-[10px] text-[#8C8273]">DOC_REF: 66-TR</span>
            </div>

            <h2 className="mb-4 font-serif text-2xl font-bold text-[#E6DEC8]">
              Semantic Transference &amp; Emotional Resonance
            </h2>

            <div className="space-y-4 font-serif text-base leading-relaxed text-[#E6DEC8]/90">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#C5A059] first-letter:leading-none">
                The transcripts preserved within this catalog deliberately prioritize emotional resonance and poetic atmosphere over literal word-for-word mimicry. Lyrical poetry in Japanese thrives upon evocative ambiguity, double meanings, and phonetic puns that wither when dissected through rigid syntactic translation.
              </p>
              <p>
                Our translations are subjective interpretations—restorations crafted to evoke in Indonesian and English the precise melancholy, fervor, or delirium intended by the original composer. Where colloquialisms or cultural allegories occur, they are refashioned to strike true in the recipient heart.
              </p>
              <p className="font-mono text-xs text-[#8C8273]">
                * Comparative study is encouraged: the phonetic Romaji and original Japanese text remain side-by-side on all docket sheets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Copyright Disclaimer */}
        <section className="relative border border-[#C5A059]/40 bg-[#1C1A17] p-6 sm:p-8">
          <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />

          <div className="border border-[#C5A059]/15 p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#C5A059]/20 pb-3 font-mono text-xs tracking-wider text-[#A8422B]">
              <span className="flex items-center gap-2">
                <span>❖</span> SECTION 02 // LEGAL PATENT &amp; RIGHTS
              </span>
              <span className="text-[10px] text-[#8C8273]">STATUTE // 1999</span>
            </div>

            <h2 className="mb-4 font-serif text-2xl font-bold text-[#E6DEC8]">
              Intellectual Property Disclaimer
            </h2>

            <div className="space-y-4 font-serif text-base leading-relaxed text-[#E6DEC8]/90">
              <p>
                All original musical scores, phonograph masters, character illustrations, and poetic verses remain the exclusive property of their respective creators, producers, vocaloid engineers, and publishing syndicates.
              </p>
              <p>
                This repository functions as a strictly non-monetized cultural study and archival archive. Should any rights holder or composer request the redaction or withdrawal of an archived record, formal correspondence will receive immediate compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Architecture & Engineering */}
        <section className="relative border border-[#C5A059]/40 bg-[#1C1A17] p-6 sm:p-8">
          <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -top-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />

          <div className="border border-[#C5A059]/15 p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#C5A059]/20 pb-3 font-mono text-xs tracking-wider text-[#4A5D4E]">
              <span className="flex items-center gap-2">
                <span>❖</span> SECTION 03 // ARCHITECTURAL APPARATUS
              </span>
              <span className="text-[10px] text-[#8C8273]">STATIC ENGINE</span>
            </div>

            <h2 className="mb-4 font-serif text-2xl font-bold text-[#E6DEC8]">
              The Engine &amp; Ledger Design
            </h2>

            <div className="space-y-3 font-serif text-base leading-relaxed text-[#E6DEC8]/90">
              <p>
                Engineered with static compilation via Next.js and Markdown ledger storage. Each translation sheet resides directly within the file system as an auditable plaintext record, immune to database decay or transient hosting intermediaries.
              </p>
              <div className="border-t border-[#C5A059]/20 pt-3 font-mono text-xs text-[#8C8273]">
                ARCHITECTURE: NEXT.JS STATIC EXPORT // TURBOPACK // ART DECO PURE-CSS
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
