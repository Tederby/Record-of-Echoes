import Link from "next/link";
import { tagToSlug } from "@/lib/tags";

export default function TagChip({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tagToSlug(tag))}`}
      className="group inline-flex items-center gap-1.5 border border-[#C5A059]/30 bg-[#1C1A17] px-2 py-0.5 font-mono text-[11px] tracking-wider text-[#E6DEC8]/90 transition-all duration-300 hover:border-[#C5A059] hover:bg-[#25221E] hover:text-[#C5A059]"
    >
      <span className="text-[8px] text-[#4A5D4E] transition-colors group-hover:text-[#C5A059]">
        ◆
      </span>
      <span>{tag}</span>
    </Link>
  );
}
