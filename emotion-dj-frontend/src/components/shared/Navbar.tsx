"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/",      label: "Home"  },
  { href: "/play",  label: "Play"  },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5">
      <Link href="/" className="flex items-center gap-2 group">
        <span className="text-xl font-display font-bold tracking-tight text-white group-hover:e-primary transition-colors">
          Vibe<span style={{ color: "var(--e-primary)" }}>Canvas</span>
        </span>
      </Link>

      <div className="flex items-center gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="relative px-4 py-2 rounded-lg text-sm font-display font-medium transition-colors hover:text-white text-white/60">
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className={`relative z-10 ${active ? "text-white" : ""}`}>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
