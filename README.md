<div align="center">
  <img src="docs/assets/banner.png" alt="Records of Echoes Banner" width="100%">

  <br />
  <br />

```text
✦ · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ✦
  ARCHIVE REF: 1966.REV-99  //  DECLASSIFIED DOSSIER  //  DEPT. OF OCCULT LINGUISTICS
✦ · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ✦
```

# ❖ RECORDS OF ECHOES
### *The Archive of Decoded Japanese Soundscapes*

<p align="center">
  <b>An enigmatic, mid-century occult archival index preserving decoded lyrics, translations, and phonographic records of Vocaloid and Japanese synthesized compositions.</b>
</p>

[![Next.js](https://img.shields.io/badge/Engine-Next.js_16_(Turbopack)-141311?style=for-the-badge&logo=nextdotjs&logoColor=C5A059&labelColor=1C1A17)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Aesthetic-Tailwind_v4_Art_Deco-141311?style=for-the-badge&logo=tailwindcss&logoColor=C5A059&labelColor=1C1A17)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/Ledger-TypeScript_5-141311?style=for-the-badge&logo=typescript&logoColor=C5A059&labelColor=1C1A17)](https://www.typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Distribution-Vercel_SSG-141311?style=for-the-badge&logo=vercel&logoColor=C5A059&labelColor=1C1A17)](https://vercel.com/)

<p align="center">
  <code>RESTRICTED ACCESS</code> // <code>DECLASSIFIED DIVISION 1999</code> // <code>PURE-CSS DOSSIER</code>
</p>

</div>

---

## ❖ Archival Overview

**Records of Echoes** is a personal lyrics translation archive styled after 1960s British classified dossiers, occult archival ledgers, and 1920s Art Deco broadsheets (*"Reverse: 1999"* aesthetic). 

Translations within this repository prioritize **semantic atmosphere and emotional resonance** over cold literal syntax. All transcripts are permanently catalogued as human-readable Markdown files directly within the repository structure, compiled at build time into an ultra-fast static web dossier without database dependencies.

---

## ❖ Visual Transcripts (Screenshots)

<!-- User Note: Replace the placeholder image paths below with your actual screenshots -->

<div align="center">

### ✦ Catalog Ledger View (Homepage)
> *Broadsheet masthead, declassified ledger statistics, full-color phonograph cards, and dial-controlled pagination.*

![Homepage Screenshot Placeholder](docs/assets/screenshot-home-placeholder.png)
*(Placeholder: Insert screenshot of the homepage broadsheet catalog)*

<br />

### ✦ Declassified Transcript View (Comparative Lyrics)
> *Bilingual dual-manuscript comparative view, furigana ruby typography, and phonograph reel-to-reel broadcast player.*

![Lyrics Detail Screenshot Placeholder](docs/assets/screenshot-lyrics-placeholder.png)
*(Placeholder: Insert screenshot of the song detail comparative lyrics)*

</div>

---

## ❖ Key Capabilities & Archival Mechanics

- **✦ Dynamic Multi-Dialect System**: Any `.md` manuscript placed inside a song docket is instantly indexed as an available dialect (Indonesian, English, Romaji, Original Japanese, etc.) without hardcoded configuration.
- **✦ Comparative Manuscript View**: Press `[S]` to split the desk into a dual-column comparative inspection view, aligning the target translation directly against the original cipher.
- **✦ Phonograph Broadcast Embed**: Automatic YouTube audio-visual player embedded inside an antique brass broadcast frame with reel-to-reel metadata.
- **✦ Furigana Annotation Engine**: Custom preprocessor interpreting `{漢字|ふりがな}` markup into standard HTML `<ruby>` annotations with typography scaling.
- **✦ Clockwork Horology Physics**: Pure-CSS 1920s Art Deco framing, rotating corner diamond nodes (`✦`), brass hairline rules, and velvety easing curves (`cubic-bezier(0.22, 1, 0.36, 1)`).
- **✦ Multi-Token Fuzzy Search**: Real-time dossier query engine filtering by title, original Kanji, producer, lyricist, tags, or lyrical snippets.
- **✦ Configurable Archival Pagination**: Dual-column catalog pagination with live record range counter and adjustable reel sizing (defaulting to 10 records / 5×2 grid).
- **✦ Control Keys**: Rapid terminal navigation via number hotkeys `[1–9]` to switch dialects and `[S]` to toggle comparative view.

---

## ❖ Technical Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                   RECORDS OF ECHOES ENGINE                  │
├───────────────────────┬─────────────────────────────────────┤
│ Framework             │ Next.js 16.2 (App Router + Turbopack)│
│ Core Language         │ TypeScript 5                        │
│ Styling Architecture  │ Tailwind CSS v4 + Pure CSS Art Deco │
│ Typography Engine     │ Cinzel, Cormorant Garamond, Space Mono│
│ Content Storage       │ Markdown with YAML Frontmatter      │
│ Parser Pipeline       │ gray-matter, react-markdown, remark │
│ Compilation Paradigm  │ 100% Static Site Generation (SSG)   │
│ Production Host       │ Vercel Edge Network                 │
└───────────────────────┴─────────────────────────────────────┘
```

---

## ❖ Content Structure & Archival Ledger

All lyrical manuscripts reside inside the [`lyrics/`](file:///d:/18/Code/Js/lyrics-translation/lyrics) directory obeying an auditable file-tree hierarchy:

```text
lyrics/
  └── Artist_Name/
        ├── Album_Title/           [Optional: for album-specific dockets]
        │     └── Song_Slug/
        │           ├── original.md       ← Master docket (highest metadata priority)
        │           ├── romaji.md         ← Transliterated phonetic script
        │           ├── indonesia.md      ← Indonesian translation transcript
        │           └── english.md        ← English translation transcript
        └── Single_Song_Slug/
              ├── original.md
              └── [dialect].md     ← Automatically discovered dialects
```

### Metadata Priority Chain

Metadata is extracted according to strict provenance order:
1. `original.md` *(Primary record)*
2. `romaji.md`
3. `indonesia.md`
4. `english.md`
5. Other discovered dialect `.md` files (alphabetical fallback)

---

## ❖ Manuscript Formatting Specification

<details>
<summary><b>[ CLICK TO INSPECT YAML FRONTMATTER & FURIGANA MARKUP ]</b></summary>

<br />

```markdown
---
# === Required Docket Fields ===
title: "Song Display Title"
artist: "Producer / Circle Name"
tags: ["vocaloid", "synthpop", "hatsune-miku"]

# === Optional Archival Metadata ===
title_original: "曲のタイトル"
title_romaji: "Kyoku no Taitoru"
album: "Anthology / Album Title"
vocalist: "Hatsune Miku"
producer: "Primary Composer"
lyricist: "Poet / Lyricist"
arranger: "Sound Arranger"
illustrator: "MV Artist"
original_language: "ja"
release_date: "1966-05-14"
translator_note: "Subjective emotional interpretation; preserves poetic cadence."
source_url: "https://www.youtube.com/watch?v=..."
translated_date: "2026-11-07"
---

Lyrical transcript goes here with native markdown formatting.

Preserves natural verse breaks.
*Italicized* phrases indicate whisper tracks.

Furigana reading syntax:
{事切|ことき}れて、またね。
{宛|あて}もなくただ{辿|たど}る{家路|いえじ}を、
{他人事|ひとごと}のように{日々|ひび}を{眺|なが}めた。
```

</details>

---

## ❖ Metadata Field Reference

| Key | Integrity | Description |
| :--- | :--- | :--- |
| `title` | **Mandatory** | Canonical translated / display title |
| `artist` | **Mandatory** | Main composer, author, or creative circle |
| `tags` | **Mandatory** | Classification marks (genre, synthesizer, mood) |
| `title_original` | Optional | Original script title (e.g. Kanji / Kana) |
| `title_romaji` | Optional | Romanized transliteration |
| `vocalist` | Optional | Performing vocal synthesizer or human singer |
| `producer` | Optional | Track producer |
| `lyricist` | Optional | Wordsmith (if distinct from producer) |
| `arranger` | Optional | Acoustic / synthesizer arranger |
| `illustrator` | Optional | MV animator / cover artist |
| `album` | Optional | Parent compilation album |
| `release_date` | Optional | Original publication date (`YYYY-MM-DD`) |
| `translator_note` | Optional | Marginalia commentary from the translator |
| `source_url` | Optional | YouTube master recording link (auto-embeds player) |
| `translated_date` | Optional | Date translation was registered (`YYYY-MM-DD`) |

---

## ❖ Developer Protocol

### Prerequisites
- Node.js 18.x or 20.x
- npm 9+ or pnpm

### Local Initialization
```bash
# Clone the classified repository
git clone https://github.com/username/lyrics-translation.git

# Enter workspace
cd lyrics-translation

# Install dependencies
npm install

# Launch development environment (Turbopack enabled)
npm run dev
```

Browse the archive at [`http://localhost:3000`](http://localhost:3000).

### Verification & Static Compilation
```bash
# Run code health and hook lint verification
npm run lint

# Generate production static dossier (SSG - 71+ routes)
npm run build
```

---

## ❖ Archival Routing Ledger

| Uniform Resource Identifier | Classification Function |
| :--- | :--- |
| `/` | The Archive of Echoes Catalog Ledger & Search |
| `/artists` | Registry of Performers, Authors & Synthesizers |
| `/tags` | Thematic Taxonomy Index & Classification Marks |
| `/about` | Curator's Foreword, Methodology & Legal Disclaimers |
| `/[artist]` | Specific Performer Docket Ledger |
| `/[artist]/[song]` | Declassified Song Manuscript (Single) |
| `/[artist]/[album]/[song]` | Declassified Song Manuscript (Album-indexed) |
| `/tags/[tag]` | Filtered Taxonomy Query Ledger |

---

## ❖ Intellectual Property & Declassified Legal Notice

All original musical scores, phonograph masters, character illustrations, and poetic verses remain the exclusive intellectual patent of their respective composers, vocaloid engineers, and publishing syndicates.

The translations indexed within **Records of Echoes** are personal, non-commercial cultural interpretations created under educational fair-use principles. Should any rights holder or composer request the redaction or withdrawal of an archived record, formal correspondence will receive immediate compliance.

<div align="center">
  <br />
  <code>✦ END OF CLASSIFIED LEDGER REF: 1966.REV-99 ✦</code>
</div>
