import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm font-display">
        <span>
          <span className="text-white/60 font-semibold">Vibe Canvas</span>
        </span>
        <div className="flex items-center gap-6">
          <Link href="/play"  className="hover:text-white/60 transition-colors">Play</Link>
          <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
          <a href="https://github.com/VANDRANKI" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
