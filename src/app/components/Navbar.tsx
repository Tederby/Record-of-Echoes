"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Catalog", code: "01" },
  { href: "/tags", label: "Classifications", code: "02" },
  { href: "/artists", label: "Performers", code: "03" },
  { href: "/about", label: "Archival Notes", code: "04" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#C5A059]/30 bg-[#141311]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-3.5 py-2.5 sm:px-6 sm:py-3">
        {/* Brand / Crest */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-2 sm:gap-2.5 transition-colors"
        >
          <div className="relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center border border-[#C5A059]/60 bg-[#1C1A17] transition-all duration-500 group-hover:border-[#C5A059] group-hover:bg-[#25221E] shrink-0">
            <span className="text-[11px] sm:text-xs text-[#C5A059] transition-transform duration-500 group-hover:rotate-45">
              ❖
            </span>
            <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
            <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          </div>
          <div className="min-w-0">
            <span className="block font-serif text-base sm:text-lg font-bold tracking-wider text-[#E6DEC8] transition-colors group-hover:text-[#C5A059] truncate">
              RECORDS &amp; ECHOES
            </span>
            <span className="block font-mono text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#8C8273] truncate">
              TRANSLATION DOSSIER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Items */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative flex flex-col py-1 text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                      isActive ? "text-[#C5A059]" : "text-[#E6DEC8]/80 hover:text-[#C5A059]"
                    }`}
                  >
                    <span className="flex items-center gap-1 font-serif">
                      <span
                        className={`font-mono text-[9px] transition-colors ${
                          isActive ? "text-[#C5A059]" : "text-[#8C8273] group-hover:text-[#C5A059]"
                        }`}
                      >
                        {item.code}.
                      </span>
                      {item.label}
                    </span>

                    {/* Brass Line Unfurling */}
                    <span className="relative mt-1 block h-[1px] w-full overflow-hidden">
                      <span
                        className={`absolute inset-0 origin-center bg-[#C5A059] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle (Archival Brass Docket Button) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close archival dossier index" : "Open archival dossier index"}
            className="group relative flex items-center gap-1.5 border border-[#C5A059]/50 bg-[#1C1A17] px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#25221E] active:scale-95"
          >
            {/* Corner diamond accents */}
            <div className="absolute -top-1 -left-1 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311] group-hover:bg-[#C5A059]" />
            <div className="absolute -bottom-1 -right-1 h-1 w-1 rotate-45 border border-[#C5A059] bg-[#141311] group-hover:bg-[#C5A059]" />

            <span className="transition-transform duration-300 text-xs">
              {isOpen ? "✕" : "❖"}
            </span>
            <span>{isOpen ? "CLOSE" : "INDEX"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Archival Fold-out Drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-[#C5A059]/25 bg-[#141311]/98 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-3">
          <div className="border border-[#C5A059]/20 bg-[#1C1A17]/70 p-1.5">
            <div className="border border-[#C5A059]/10 p-2">
              <div className="mb-2 flex items-center justify-between border-b border-[#C5A059]/20 pb-1.5 font-mono text-[9px] tracking-[0.2em] text-[#8C8273]">
                <span className="flex items-center gap-1 text-[#C5A059]">
                  <span>✦</span> ARCHIVE NAVIGATION
                </span>
                <span>DOSSIER V.66</span>
              </div>

              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`group flex items-center justify-between border px-3 py-2.5 font-serif text-sm tracking-wide transition-all duration-300 ${
                          isActive
                            ? "border-[#C5A059] bg-[#25221E] text-[#C5A059]"
                            : "border-transparent text-[#E6DEC8] hover:border-[#C5A059]/40 hover:bg-[#25221E]/60 hover:text-[#C5A059]"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`font-mono text-xs ${
                              isActive ? "text-[#C5A059]" : "text-[#8C8273]"
                            }`}
                          >
                            [{item.code}]
                          </span>
                          <span>{item.label}</span>
                        </span>
                        <span
                          className={`font-mono text-xs transition-transform duration-300 ${
                            isActive
                              ? "text-[#C5A059] translate-x-0.5"
                              : "text-[#8C8273] group-hover:text-[#C5A059] group-hover:translate-x-0.5"
                          }`}
                        >
                          ➔
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
