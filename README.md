<div align="center">
  <img src="docs/assets/banner.png" alt="Lyrics Translation Banner" width="100%">
  
  <br />
  <br />

  <h1>Terjemahan Lirik</h1>
  <p>
    <b>Situs terjemahan lirik lagu Jepang (Vocaloid & J-Pop)</b><br/>
    Mendukung multi-bahasa, termasuk Indonesia, English, Romaji, dan lainnya.
  </p>

  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
</div>

<br />

Dibangun dengan Next.js (App Router), konten disimpan sebagai file Markdown di dalam repositori — bisa langsung dibaca dan dibagikan melalui GitHub.

---

## Daftar Isi
- [Tangkapan Layar](#tangkapan-layar)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Konten](#struktur-konten)
- [Memulai Development](#memulai-development)
- [Menambah Terjemahan Baru](#menambah-terjemahan-baru)
- [Rute Aplikasi](#rute-aplikasi)
- [Disclaimer](#disclaimer)

---

## Tangkapan Layar

<div align="center">
  <img src="docs/assets/mockup-home.png.jpeg" alt="Halaman Utama" width="80%">
  <br/>
  <em>Tampilan Halaman Utama (Daftar Lagu & Statistik)</em>
  <br/><br/>
  <img src="docs/assets/mockup-lyrics.png.jpeg" alt="Mode Lirik Berdampingan" width="80%">
  <br/>
  <em>Tampilan Side-by-Side Mode untuk Terjemahan Lirik</em>
</div>

---

## Fitur Utama

**Multi-bahasa Fleksibel**
> Sistem bahasa dinamis; setiap file `.md` di folder lagu otomatis terdeteksi sebagai bahasa baru (tidak terbatas pada bahasa yang di-hardcode).

**Side-by-side Mode**
> Bandingkan dua bahasa secara berdampingan dengan tampilan layar yang lebih luas.

**Dropdown Language Selector**
> Pilih bahasa via dropdown menu (mendukung jumlah bahasa tak terbatas).

**Fuzzy Search**
> Pencarian cerdas berdasarkan judul, artis, vokalis, produser, tag, bahkan cuplikan isi lirik — tidak harus exact match.

**YouTube Embed**
> Video YouTube otomatis di-embed langsung di halaman lagu.

**Markdown Rendering**
> Lirik dirender sebagai markdown terformat (tebal, miring, dll).

**Furigana Support**
> Mendukung sintaks `{漢字|ふりがな}` untuk menampilkan anotasi cara baca di atas huruf kanji.

**Tags & Stats Counter**
> Filter lagu berdasarkan tag (vocaloid, j-pop, ballad, dll) serta statistik total lagu, artis, dan tag di halaman utama.

**Keyboard Shortcuts**
> Tekan `1–9` untuk mengganti bahasa, `S` untuk toggle side-by-side mode.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + @tailwindcss/typography
- **Content**: Markdown + YAML frontmatter (`gray-matter`)
- **Markdown Rendering**: `react-markdown` + `remark-breaks` + `remark-gfm`
- **Rendering**: Static Site Generation (SSG) via `generateStaticParams`
- **Deploy**: Vercel

---

## Struktur Konten

Lirik disimpan di folder `lyrics/` dengan struktur:

```text
lyrics/
  Artist_Name/
    Album_Name/              ← opsional, hanya jika lagu punya album
      Song_Title/
        original.md          ← sumber metadata utama (prioritas tertinggi)
        romaji.md            ← opsional
        indonesia.md         ← opsional
        english.md           ← opsional
        [bahasa_lain].md     ← opsional, otomatis terdeteksi
    Song_Title_Tanpa_Album/
      original.md
      ...
```

> **Catatan:** Minimal satu file `.md` harus ada di folder lagu agar dianggap valid. Tidak wajib `indonesia.md` atau bahasa tertentu.

### Prioritas Metadata

Metadata (title, artist, tags, dll.) diambil dari file dengan prioritas:

1. `original.md`
2. `romaji.md`
3. `indonesia.md`
4. `english.md`
5. File `.md` lainnya (urutan alfabet)

Jika file prioritas tertinggi sudah memiliki metadata, sistem tidak akan mengambil metadata dari file lain. Jika tidak ada metadata sama sekali, sistem akan melakukan *fallback* menggunakan nama folder sebagai judul dan artis.

<details>
<summary><b>Klik untuk melihat Format File Markdown</b></summary>
<br/>

```markdown
---
# === Field Wajib ===
title: "Judul Lagu"
artist: "Nama Artis"
tags: ["vocaloid", "melankolis", "hatsune-miku"]

# === Field Opsional ===
title_original: "曲のタイトル"
title_romaji: "Kyoku no Taitoru"
album: "Nama Album"
vocalist: "Hatsune Miku"
producer: "Nama Producer"
lyricist: "Nama Penulis Lirik"
arranger: "Nama Arranger"
illustrator: "Nama Illustrator MV"
original_language: "ja"
release_date: "2024-01-01"
translator_note: "Terjemahan bebas, bukan literal"
source_url: "https://youtube.com/..."
translated_date: "2026-07-22"
---

Isi lirik di sini, **mendukung markdown formatting**.

Baris baru dipertahankan.
*Italic* dan **bold** dirender.

Furigana: {事切|ことき}れて、またね。
```
</details>

<details>
<summary><b>Klik untuk melihat Penjelasan Furigana (Ruby Text)</b></summary>
<br/>

Gunakan syntax `{漢字|ふりがな}` untuk menambahkan furigana di atas kanji:

```markdown
{事切|ことき}れて、またね。
{宛|あて}もなくただ{辿|たど}る{家路|いえじ}を、
{他人事|ひとごと}のように{日々|ひび}を{眺|なが}めた。
```

Kode di atas akan dirender sebagai teks dengan anotasi kecil di atas kanji. Browser yang tidak mendukung ruby text akan menampilkan teks bacaan di dalam tanda kurung sebagai *fallback*.
</details>

<details>
<summary><b>Klik untuk melihat Tabel Lengkap Metadata</b></summary>
<br/>

| Field | Status | Deskripsi |
|---|---|---|
| `title` | **Wajib** | Judul lagu (versi display/translated) |
| `artist` | **Wajib** | Nama artis/circle |
| `tags` | **Wajib** | Array tag untuk kategorisasi |
| `title_original` | Opsional | Judul dalam bahasa asli (e.g. Jepang) |
| `title_romaji` | Opsional | Judul dalam romaji (transliterasi Latin) |
| `album` | Opsional | Nama album |
| `vocalist` | Opsional | Nama vocalist (e.g. "Hatsune Miku") |
| `producer` | Opsional | Nama producer/composer |
| `lyricist` | Opsional | Penulis lirik (jika berbeda dari producer) |
| `arranger` | Opsional | Arranger/penata musik |
| `illustrator` | Opsional | Illustrator MV/cover |
| `original_language` | Opsional | Bahasa asli lagu (default: "ja") |
| `release_date` | Opsional | Tanggal rilis lagu (YYYY-MM-DD) |
| `translator_note` | Opsional | Catatan penerjemah |
| `source_url` | Opsional | URL sumber (YouTube, NicoNico, dll.) — YouTube otomatis di-embed |
| `translated_date` | Opsional | Tanggal diterjemahkan (YYYY-MM-DD) |

</details>

---

## Memulai Development

**Prerequisites:** Node.js 18+ dan npm

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

**Build for Production:**
```bash
npm run build
```

---

## Menambah Terjemahan Baru

1. Buat folder di `lyrics/Nama_Artis/Judul_Lagu/` (atau tambahkan `Nama_Album` jika relevan).
2. Buat minimal satu file `.md` (misalnya `original.md`, `indonesia.md`) dengan format YAML frontmatter.
3. (Opsional) Tambahkan file bahasa lain — nama file otomatis akan menjadi label bahasa di situs.
4. Push ke GitHub, dan Vercel akan otomatis melakukan *rebuild*.

### Menambah Bahasa Baru

Cukup buat file `.md` baru di folder lagu dengan nama bahasa yang diinginkan. Sistem kami akan mendeteksinya secara dinamis:

```text
lyrics/Artis/Lagu/
  original.md      → label: "原文"
  romaji.md        → label: "Romaji"
  indonesia.md     → label: "Indonesia"
  english.md       → label: "English"
  korean.md        → label: "Korean"     ← otomatis terdeteksi!
  spanish.md       → label: "Spanish"    ← otomatis terdeteksi!
```

---

## Rute Aplikasi

| Route | Deskripsi |
|---|---|
| `/` | Homepage — daftar semua lagu, search filter, stats |
| `/[artist]` | Halaman artis — semua lagu dari artis tertentu |
| `/[artist]/[song]` | Detail lagu (tanpa album) |
| `/[artist]/[album]/[song]` | Detail lagu (dengan album) |
| `/tags` | Daftar semua tag |
| `/tags/[tag]` | Lagu-lagu dengan tag tertentu |
| `/artists` | Daftar semua artis |
| `/about` | Tentang situs ini |

---

## Disclaimer

Semua lirik asli, musik, dan karya seni adalah milik artis, produser, dan pemegang hak cipta masing-masing. Terjemahan di sini bersifat personal dan non-komersial, dibuat semata-mata untuk tujuan apresiasi budaya dan edukasi.
