import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Catalog", code: "01" },
  { href: "/tags", label: "Classifications", code: "02" },
  { href: "/artists", label: "Performers", code: "03" },
  { href: "/about", label: "Archival Notes", code: "04" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#C5A059]/30 bg-[#141311]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Crest */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-colors"
        >
          <div className="relative flex h-8 w-8 items-center justify-center border border-[#C5A059]/60 bg-[#1C1A17] transition-all duration-500 group-hover:border-[#C5A059] group-hover:bg-[#25221E]">
            <span className="text-xs text-[#C5A059] transition-transform duration-500 group-hover:rotate-45">
              ❖
            </span>
            <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
            <div className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rotate-45 border border-[#C5A059] bg-[#141311]" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-wider text-[#E6DEC8] transition-colors group-hover:text-[#C5A059]">
              RECORDS &amp; ECHOES
            </span>
            <span className="block font-mono text-[9px] tracking-[0.25em] text-[#8C8273]">
              TRANSLATION DOSSIER
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-1 sm:gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative flex flex-col py-1 text-xs tracking-[0.18em] uppercase text-[#E6DEC8]/80 transition-colors duration-300 hover:text-[#C5A059]"
                >
                  <span className="flex items-center gap-1 font-serif">
                    <span className="font-mono text-[9px] text-[#8C8273] transition-colors group-hover:text-[#C5A059]">
                      {item.code}.
                    </span>
                    {item.label}
                  </span>

                  {/* Brass Line Unfurling */}
                  <span className="relative mt-1 block h-[1px] w-full overflow-hidden">
                    <span className="absolute inset-0 origin-center scale-x-0 bg-[#C5A059] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
